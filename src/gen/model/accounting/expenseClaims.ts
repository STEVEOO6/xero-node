/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.8
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ExpenseClaim } from './expenseClaim';

export class ExpenseClaims {
    'expenseClaims'?: Array<ExpenseClaim>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expenseClaims",
            "baseName": "ExpenseClaims",
            "type": "Array<ExpenseClaim>"
        }    ];

    static getAttributeTypeMap() {
        return ExpenseClaims.attributeTypeMap;
    }
}

