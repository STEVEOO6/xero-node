import { XeroClient } from "../XeroClient"
const tokenSetJson = require("./mocks/tokenSet.json")
const connectionsResponse = require("./mocks/connectionsResponse.json")
const getOrganisationResponse = require("./mocks/getOrganisationResponse.json")
import nock from 'nock';
import sinon from 'sinon';

const xero = new XeroClient({
	clientId: 'YOUR_CLIENT_ID',
	clientSecret: 'YOUR_CLIENT_SECRET',
	redirectUris: [`http://localhost:5000/callback`],
	scopes: 'openid profile email accounting.transactions offline_access'.split(" ")
});

const tokenSet: any = tokenSetJson
let connect
let disconnect

describe('the XeroClient', () => {
  beforeEach(async () => {
    await xero.initialize()

    xero.setTokenSet(tokenSet)
    
    sinon.stub(xero.openIdClient, 'refresh').returns(tokenSet);

    sinon.stub(xero.accountingApi, 'getOrganisations').returns(getOrganisationResponse);

    connect = nock('https://api.xero.com')
      .get('/connections')
      .reply(200, connectionsResponse);

    disconnect = nock('https://api.xero.com')
      .delete(`/connections/${connectionsResponse[0].tenantId}`)
      .reply(200, tokenSet);
  })

  afterEach(() => {
    sinon.restore();
    nock.cleanAll()
  });

  describe('functions', () => {
    it('buildConsentUrl() returns the auth url', async () => {
      const authUrl = await xero.buildConsentUrl() 
      expect(authUrl.substring(0,49)).toEqual('https://login.xero.com/identity/connect/authorize')
    });
  
    it('initialize() returns the client', async () => {
      const xeroClient = await xero.initialize()
      expect(xeroClient).toHaveProperty('accountingApi')
    });
    
    it('readTokenSet() returns the tokenSet', async () => {
      const xeroTokenSet = await xero.readTokenSet()
      expect(xeroTokenSet).toEqual(tokenSet)
    });
  
    it('apiCallback() returns the tokenSet', async () => {
      const xeroTokenSet = await xero.readTokenSet()
      expect(xeroTokenSet).toEqual(tokenSet)
    });
  
    it('updateTenants() returns tenant data, nests orgData, & is accessible on the client', async () => {
      const tenants = await xero.updateTenants()
      expect(tenants[0].orgData).toEqual(getOrganisationResponse.body.organisations[0])
      expect(xero.tenants[0]).toEqual(tenants[0])
      expect(connect.isDone()).toBe(true)
    });
  
    it('disconnect() returns the tokenSet', async () => {
      const tokenSet = await xero.disconnect(connectionsResponse[0].tenantId)
      expect(tokenSet).toEqual(tokenSet)
      expect(disconnect.isDone()).toBe(true)
    });
  
    it('refreshToken() refreshes token and returns the tokenSet', async () => {
      expect(await xero.refreshToken()).toEqual(tokenSet)
    });
  
    it('refreshTokenUsingTokenSet() refreshes token with tokenSetParameter and returns the tokenSet', async () => {
      const newTokenSet = Object.assign(tokenSet, {"id_token": 'abc_123'})
      const updatedTokenSet = await xero.refreshTokenUsingTokenSet(newTokenSet)
      expect(updatedTokenSet.id_token).toEqual('abc_123')
      await xero.setTokenSet(updatedTokenSet)
      const xeroTokenSet = await xero.readTokenSet()
      expect(xeroTokenSet.id_token).toEqual('abc_123')
    });
  })
})
