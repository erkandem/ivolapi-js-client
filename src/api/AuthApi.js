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

import ApiClient from "../ApiClient";
import HTTPValidationError from '../model/HTTPValidationError';
import Token from '../model/Token';

/**
* Auth service.
* @module api/AuthApi
* @version 3.0.3
*/
export default class AuthApi {

    /**
    * Constructs a new AuthApi. 
    * @alias module:api/AuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the postApiUserLogin operation.
     * @callback module:api/AuthApi~postApiUserLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post Api User Login
     * @param {module:api/AuthApi~postApiUserLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Token}
     */
    postApiUserLogin(grantType, username, password, scope, clientId, clientSecret, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'grant_type': grantType,
        'username': username,
        'password': password,
        'scope': scope,
        'client_id': clientId,
        'client_secret': clientSecret
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Token;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
