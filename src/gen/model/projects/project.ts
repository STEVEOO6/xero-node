/**
 * Xero Projects API
 * This is the Xero Projects API
 *
 * The version of the OpenAPI document: 2.0.8
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Amount } from './amount';
import { CurrencyCode } from './currencyCode';
import { ProjectStatus } from './projectStatus';

export class Project {
    /**
    * Identifier of the project.
    */
    'projectId'?: string;
    /**
    * Identifier of the contact this project was created for.
    */
    'contactId'?: string;
    /**
    * Name of the project.
    */
    'name': string;
    'currencyCode'?: CurrencyCode;
    /**
    * A total of minutes logged against all tasks on the Project.
    */
    'minutesLogged'?: number;
    'totalTaskAmount'?: Amount;
    'totalExpenseAmount'?: Amount;
    'estimateAmount'?: Amount;
    /**
    * Minutes which have not been invoiced across all chargeable tasks in the project.
    */
    'minutesToBeInvoiced'?: number;
    'taskAmountToBeInvoiced'?: Amount;
    'taskAmountInvoiced'?: Amount;
    'expenseAmountToBeInvoiced'?: Amount;
    'expenseAmountInvoiced'?: Amount;
    'projectAmountInvoiced'?: Amount;
    'deposit'?: Amount;
    'depositApplied'?: Amount;
    'creditNoteAmount'?: Amount;
    /**
    * Deadline for the project. UTC Date Time in ISO-8601 format.
    */
    'deadlineUtc'?: Date;
    'totalInvoiced'?: Amount;
    'totalToBeInvoiced'?: Amount;
    'estimate'?: Amount;
    'status'?: ProjectStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "contactId",
            "baseName": "contactId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "CurrencyCode"
        },
        {
            "name": "minutesLogged",
            "baseName": "minutesLogged",
            "type": "number"
        },
        {
            "name": "totalTaskAmount",
            "baseName": "totalTaskAmount",
            "type": "Amount"
        },
        {
            "name": "totalExpenseAmount",
            "baseName": "totalExpenseAmount",
            "type": "Amount"
        },
        {
            "name": "estimateAmount",
            "baseName": "estimateAmount",
            "type": "Amount"
        },
        {
            "name": "minutesToBeInvoiced",
            "baseName": "minutesToBeInvoiced",
            "type": "number"
        },
        {
            "name": "taskAmountToBeInvoiced",
            "baseName": "taskAmountToBeInvoiced",
            "type": "Amount"
        },
        {
            "name": "taskAmountInvoiced",
            "baseName": "taskAmountInvoiced",
            "type": "Amount"
        },
        {
            "name": "expenseAmountToBeInvoiced",
            "baseName": "expenseAmountToBeInvoiced",
            "type": "Amount"
        },
        {
            "name": "expenseAmountInvoiced",
            "baseName": "expenseAmountInvoiced",
            "type": "Amount"
        },
        {
            "name": "projectAmountInvoiced",
            "baseName": "projectAmountInvoiced",
            "type": "Amount"
        },
        {
            "name": "deposit",
            "baseName": "deposit",
            "type": "Amount"
        },
        {
            "name": "depositApplied",
            "baseName": "depositApplied",
            "type": "Amount"
        },
        {
            "name": "creditNoteAmount",
            "baseName": "creditNoteAmount",
            "type": "Amount"
        },
        {
            "name": "deadlineUtc",
            "baseName": "deadlineUtc",
            "type": "Date"
        },
        {
            "name": "totalInvoiced",
            "baseName": "totalInvoiced",
            "type": "Amount"
        },
        {
            "name": "totalToBeInvoiced",
            "baseName": "totalToBeInvoiced",
            "type": "Amount"
        },
        {
            "name": "estimate",
            "baseName": "estimate",
            "type": "Amount"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ProjectStatus"
        }    ];

    static getAttributeTypeMap() {
        return Project.attributeTypeMap;
    }
}

