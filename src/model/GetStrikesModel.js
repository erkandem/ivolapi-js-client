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
* The GetStrikesModel model module.
* @module model/GetStrikesModel
* @version 3.0.3
*/
export default class GetStrikesModel {
    /**
    * Constructs a new <code>GetStrikesModel</code>.
    * @alias module:model/GetStrikesModel
    * @class
    * @param ust {String} 
    * @param exchange {String} 
    * @param symbol {String} 
    * @param putcall {module:model/GetStrikesModel.PutcallEnum} 
    * @param ltd {String} 
    */

    constructor(ust, exchange, symbol, putcall, ltd) {
        
        
        this['ust'] = ust;
        this['exchange'] = exchange;
        this['symbol'] = symbol;
        this['putcall'] = putcall;
        this['ltd'] = ltd;
        
    }

    /**
    * Constructs a <code>GetStrikesModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GetStrikesModel} obj Optional instance to populate.
    * @return {module:model/GetStrikesModel} The populated <code>GetStrikesModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStrikesModel();
                        
            
            if (data.hasOwnProperty('ust')) {
                obj['ust'] = ApiClient.convertToType(data['ust'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('putcall')) {
                obj['putcall'] = ApiClient.convertToType(data['putcall'], 'String');
            }
            if (data.hasOwnProperty('ltd')) {
                obj['ltd'] = ApiClient.convertToType(data['ltd'], 'String');
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
    * @member {module:model/GetStrikesModel.PutcallEnum} putcall
    */
    'putcall' = undefined;
    /**
    * @member {String} ltd
    */
    'ltd' = undefined;



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

}
