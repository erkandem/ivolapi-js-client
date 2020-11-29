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
* The RegisterPy model module.
* @module model/RegisterPy
* @version 3.0.3
*/
export default class RegisterPy {
    /**
    * Constructs a new <code>RegisterPy</code>.
    * @alias module:model/RegisterPy
    * @class
    * @param username {String} 
    * @param password {String} 
    */

    constructor(username, password) {
        
        
        this['username'] = username;
        this['password'] = password;
        
    }

    /**
    * Constructs a <code>RegisterPy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RegisterPy} obj Optional instance to populate.
    * @return {module:model/RegisterPy} The populated <code>RegisterPy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterPy();
                        
            
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} username
    */
    'username' = undefined;
    /**
    * @member {String} password
    */
    'password' = undefined;




}
