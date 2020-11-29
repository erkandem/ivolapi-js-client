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

import ApiClient from './ApiClient';
import BodyPostApiUserLoginLoginPost from './model/BodyPostApiUserLoginLoginPost';
import Data from './model/Data';
import DeltaQuery from './model/DeltaQuery';
import GetStrikesModel from './model/GetStrikesModel';
import HTTPValidationError from './model/HTTPValidationError';
import HeartBeat from './model/HeartBeat';
import Query from './model/Query';
import Query1 from './model/Query1';
import Query2 from './model/Query2';
import RawOptionPy from './model/RawOptionPy';
import RegisterPy from './model/RegisterPy';
import SurfaceAggregate from './model/SurfaceAggregate';
import SurfaceValue from './model/SurfaceValue';
import Token from './model/Token';
import TopOiQuery from './model/TopOiQuery';
import UpdatePassword from './model/UpdatePassword';
import ValidationError from './model/ValidationError';
import VolaSummary from './model/VolaSummary';
import APIHealthApi from './api/APIHealthApi';
import AuthApi from './api/AuthApi';
import CompositeApi from './api/CompositeApi';
import ImpliedVolatilityApi from './api/ImpliedVolatilityApi';
import InfoApi from './api/InfoApi';
import PriceDataApi from './api/PriceDataApi';
import RawDataApi from './api/RawDataApi';
import UsersApi from './api/UsersApi';

/**
* implied_volatility_and_price_data_for_selected_ETFs_and_futures__Contact_info_at_volsurf_com.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var IVolApi = require('index'); // See note below*.
* var xxxSvc = new IVolApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new IVolApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new IVolApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new IVolApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.0.3
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BodyPostApiUserLoginLoginPost model constructor.
     * @property {module:model/BodyPostApiUserLoginLoginPost}
     */
    BodyPostApiUserLoginLoginPost,

    /**
     * The Data model constructor.
     * @property {module:model/Data}
     */
    Data,

    /**
     * The DeltaQuery model constructor.
     * @property {module:model/DeltaQuery}
     */
    DeltaQuery,

    /**
     * The GetStrikesModel model constructor.
     * @property {module:model/GetStrikesModel}
     */
    GetStrikesModel,

    /**
     * The HTTPValidationError model constructor.
     * @property {module:model/HTTPValidationError}
     */
    HTTPValidationError,

    /**
     * The HeartBeat model constructor.
     * @property {module:model/HeartBeat}
     */
    HeartBeat,

    /**
     * The Query model constructor.
     * @property {module:model/Query}
     */
    Query,

    /**
     * The Query1 model constructor.
     * @property {module:model/Query1}
     */
    Query1,

    /**
     * The Query2 model constructor.
     * @property {module:model/Query2}
     */
    Query2,

    /**
     * The RawOptionPy model constructor.
     * @property {module:model/RawOptionPy}
     */
    RawOptionPy,

    /**
     * The RegisterPy model constructor.
     * @property {module:model/RegisterPy}
     */
    RegisterPy,

    /**
     * The SurfaceAggregate model constructor.
     * @property {module:model/SurfaceAggregate}
     */
    SurfaceAggregate,

    /**
     * The SurfaceValue model constructor.
     * @property {module:model/SurfaceValue}
     */
    SurfaceValue,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The TopOiQuery model constructor.
     * @property {module:model/TopOiQuery}
     */
    TopOiQuery,

    /**
     * The UpdatePassword model constructor.
     * @property {module:model/UpdatePassword}
     */
    UpdatePassword,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
     * The VolaSummary model constructor.
     * @property {module:model/VolaSummary}
     */
    VolaSummary,

    /**
    * The APIHealthApi service constructor.
    * @property {module:api/APIHealthApi}
    */
    APIHealthApi,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The CompositeApi service constructor.
    * @property {module:api/CompositeApi}
    */
    CompositeApi,

    /**
    * The ImpliedVolatilityApi service constructor.
    * @property {module:api/ImpliedVolatilityApi}
    */
    ImpliedVolatilityApi,

    /**
    * The InfoApi service constructor.
    * @property {module:api/InfoApi}
    */
    InfoApi,

    /**
    * The PriceDataApi service constructor.
    * @property {module:api/PriceDataApi}
    */
    PriceDataApi,

    /**
    * The RawDataApi service constructor.
    * @property {module:api/RawDataApi}
    */
    RawDataApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
