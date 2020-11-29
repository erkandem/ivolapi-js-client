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
import ModelObject from '../model/ModelObject';
import Query from '../model/Query';
import Query1 from '../model/Query1';
import Query2 from '../model/Query2';

/**
* RawData service.
* @module api/RawDataApi
* @version 3.0.3
*/
export default class RawDataApi {

    /**
    * Constructs a new RawDataApi. 
    * @alias module:api/RawDataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAllOptionsSingleUnderlyingSingleDay operation.
     * @callback module:api/RawDataApi~getAllOptionsSingleUnderlyingSingleDayCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all options for one underlying for one (business)day
     * A route template. Will set appropriate headers and forward the already serialized postgres response.  - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: &#x27;eqt&#x27; e.g. - **exchange**: one of: &#x27;usetf&#x27;, e.g. - **date**: format: yyyy-mm-dd
     * @param {Object} opts Optional parameters
     * @param {module:api/RawDataApi~getAllOptionsSingleUnderlyingSingleDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    getAllOptionsSingleUnderlyingSingleDay(symbol, _date, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'symbol': symbol,
        'date': _date,
        'ust': opts['ust'],
        'exchange': opts['exchange']
      };
      let headerParams = {
        'accept': opts['accept']
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/option-data/single-underlying-single-day', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postDeltaData operation.
     * @callback module:api/RawDataApi~postDeltaDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post Delta Data
     * @param {module:api/RawDataApi~postDeltaDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    postDeltaData(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/delta-contour', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postRawOptionData operation.
     * @callback module:api/RawDataApi~postRawOptionDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post Raw Option Data
     * time series data related to a single option (e.g. put on XYZ with strike at $123  expiring Jan 21, 2099)  - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: [&#x27;fut&#x27;, &#x27;eqt&#x27;, &#x27;ind&#x27;, &#x27;fx&#x27;] - **exchange**: one of: [&#x27;usetf&#x27;, &#x27;cme&#x27;, &#x27;ice&#x27;, &#x27;eurex&#x27;] - **option_month**: expiry month of the option chain format: yyyymm - **underlying_month**: maturity month of the underlying contract format: yyyymm - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **ltd**: last trading day of option chain. see info endpoint for choices. format: yyyymmdd - **putcall**: &#x60;put&#x60; or &#x60;call&#x60; - **strkpx**: strike price 125.5 ~ 125.49 e.g. will be recognized +1 minimum tick size - **metric**: choose one of the raw or derived data - **order**:  sorting order with respect to date
     * @param {module:api/RawDataApi~postRawOptionDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    postRawOptionData(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/option-data', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postTopOiAndVolume operation.
     * @callback module:api/RawDataApi~postTopOiAndVolumeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post Top Oi And Volume
     * &#x27;Returns the open interest development of the top &#x60;n&#x60; strikes of an option chain
     * @param {module:api/RawDataApi~postTopOiAndVolumeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelObject}
     */
    postTopOiAndVolume(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelObject;

      return this.apiClient.callApi(
        '/top-oi-and-volume', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
