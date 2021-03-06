/**
 * iVolAPI
 * implied volatility and price data for selected ETFs and futures. Contact: info at volsurf.com
 *
 * OpenAPI spec version: 3.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The TopOiQuery model module.
* @module model/TopOiQuery
* @version 3.0.3
*/
export default class TopOiQuery {
    /**
    * Constructs a new <code>TopOiQuery</code>.
    * @alias module:model/TopOiQuery
    * @class
    * @param ust {String} 
    * @param exchange {String} 
    * @param symbol {String} 
    * @param ltd {String} 
    * @param putcall {module:model/TopOiQuery.PutcallEnum} 
    * @param metric {String} 
    */

    constructor(ust, exchange, symbol, ltd, putcall, metric) {
        
        
        this['ust'] = ust;
        this['exchange'] = exchange;
        this['symbol'] = symbol;
        this['ltd'] = ltd;
        this['putcall'] = putcall;
        this['metric'] = metric;
        
    }

    /**
    * Constructs a <code>TopOiQuery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TopOiQuery} obj Optional instance to populate.
    * @return {module:model/TopOiQuery} The populated <code>TopOiQuery</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TopOiQuery();
                        
            
            if (data.hasOwnProperty('ust')) {
                obj['ust'] = ApiClient.convertToType(data['ust'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('ltd')) {
                obj['ltd'] = ApiClient.convertToType(data['ltd'], 'String');
            }
            if (data.hasOwnProperty('putcall')) {
                obj['putcall'] = ApiClient.convertToType(data['putcall'], 'String');
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = ApiClient.convertToType(data['metric'], 'String');
            }
            if (data.hasOwnProperty('option_month')) {
                obj['option_month'] = ApiClient.convertToType(data['option_month'], 'String');
            }
            if (data.hasOwnProperty('underlying_month')) {
                obj['underlying_month'] = ApiClient.convertToType(data['underlying_month'], 'String');
            }
            if (data.hasOwnProperty('startdate')) {
                obj['startdate'] = ApiClient.convertToType(data['startdate'], 'String');
            }
            if (data.hasOwnProperty('enddate')) {
                obj['enddate'] = ApiClient.convertToType(data['enddate'], 'String');
            }
            if (data.hasOwnProperty('dminus')) {
                obj['dminus'] = ApiClient.convertToType(data['dminus'], 'Number');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'String');
            }
            if (data.hasOwnProperty('top_n')) {
                obj['top_n'] = ApiClient.convertToType(data['top_n'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} ust
    */
    'ust' = undefined;
    /**
    * @member {String} exchange
    */
    'exchange' = undefined;
    /**
    * @member {String} symbol
    */
    'symbol' = undefined;
    /**
    * @member {String} ltd
    */
    'ltd' = undefined;
    /**
    * @member {module:model/TopOiQuery.PutcallEnum} putcall
    */
    'putcall' = undefined;
    /**
    * @member {String} metric
    */
    'metric' = undefined;
    /**
    * @member {String} option_month
    */
    'option_month' = undefined;
    /**
    * @member {String} underlying_month
    */
    'underlying_month' = undefined;
    /**
    * @member {String} startdate
    */
    'startdate' = undefined;
    /**
    * @member {String} enddate
    */
    'enddate' = undefined;
    /**
    * @member {Number} dminus
    * @default 60
    */
    'dminus' = 60;
    /**
    * @member {module:model/TopOiQuery.OrderEnum} order
    * @default 'asc'
    */
    'order' = 'asc';
    /**
    * @member {Number} top_n
    * @default 5
    */
    'top_n' = 5;



    /**
    * Allowed values for the <code>putcall</code> property.
    * @enum {String}
    * @readonly
    */
    static PutcallEnum = {
        /**
         * value: "put"
         * @const
         */
        "put": "put",
        /**
         * value: "call"
         * @const
         */
        "call": "call"    };
    /**
    * Allowed values for the <code>order</code> property.
    * @enum {String}
    * @readonly
    */
    static OrderEnum = {
        /**
         * value: "asc"
         * @const
         */
        "asc": "asc",
        /**
         * value: "desc"
         * @const
         */
        "desc": "desc"    };

}
