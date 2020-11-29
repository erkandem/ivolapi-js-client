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
import DeltaQuery from './DeltaQuery';

/**
* The Query2 model module.
* @module model/Query2
* @version 3.0.3
*/
export default class Query2 {
    /**
    * Constructs a new <code>Query2</code>.
    * @alias module:model/Query2
    * @class
    * @extends module:model/DeltaQuery
    * @param ust {} 
    * @param exchange {} 
    * @param symbol {} 
    * @param ltd {} 
    * @param startdate {} 
    * @param enddate {} 
    */

    constructor(ust, exchange, symbol, ltd, startdate, enddate) {
        DeltaQuery.call(this, ust, exchange, symbol, ltd, startdate, enddate);
        
        
    }

    /**
    * Constructs a <code>Query2</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Query2} obj Optional instance to populate.
    * @return {module:model/Query2} The populated <code>Query2</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Query2();
            
            DeltaQuery.constructFromObject(data, obj);
            
        }
        return obj;
    }





}