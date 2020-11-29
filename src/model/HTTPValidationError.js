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
import ValidationError from './ValidationError';

/**
* The HTTPValidationError model module.
* @module model/HTTPValidationError
* @version 3.0.3
*/
export default class HTTPValidationError {
    /**
    * Constructs a new <code>HTTPValidationError</code>.
    * @alias module:model/HTTPValidationError
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>HTTPValidationError</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/HTTPValidationError} obj Optional instance to populate.
    * @return {module:model/HTTPValidationError} The populated <code>HTTPValidationError</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HTTPValidationError();
                        
            
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], [ValidationError]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ValidationError>} detail
    */
    'detail' = undefined;




}
