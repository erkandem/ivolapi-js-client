# IVolApi.RawDataApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllOptionsSingleUnderlyingSingleDay**](RawDataApi.md#getAllOptionsSingleUnderlyingSingleDay) | **GET** /option-data/single-underlying-single-day | Returns all options for one underlying for one (business)day
[**postDeltaData**](RawDataApi.md#postDeltaData) | **POST** /delta-contour | Post Delta Data
[**postRawOptionData**](RawDataApi.md#postRawOptionData) | **POST** /option-data | Post Raw Option Data
[**postTopOiAndVolume**](RawDataApi.md#postTopOiAndVolume) | **POST** /top-oi-and-volume | Post Top Oi And Volume

<a name="getAllOptionsSingleUnderlyingSingleDay"></a>
# **getAllOptionsSingleUnderlyingSingleDay**
> ModelObject getAllOptionsSingleUnderlyingSingleDay(symbol, _date, opts)

Returns all options for one underlying for one (business)day

A route template. Will set appropriate headers and forward the already serialized postgres response.  - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: &#x27;eqt&#x27; e.g. - **exchange**: one of: &#x27;usetf&#x27;, e.g. - **date**: format: yyyy-mm-dd

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.RawDataApi();
let symbol = "symbol_example"; // String | 
let _date = new Date("2013-10-20"); // Date | 
let opts = { 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'accept': "application/json" // String | 
};
apiInstance.getAllOptionsSingleUnderlyingSingleDay(symbol, _date, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**|  | 
 **_date** | **Date**|  | 
 **ust** | **String**|  | [optional] 
 **exchange** | **String**|  | [optional] 
 **accept** | **String**|  | [optional] [default to application/json]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postDeltaData"></a>
# **postDeltaData**
> ModelObject postDeltaData(body)

Post Delta Data

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.RawDataApi();
let body = new IVolApi.Query2(); // Query2 | 

apiInstance.postDeltaData(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Query2**](Query2.md)|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postRawOptionData"></a>
# **postRawOptionData**
> ModelObject postRawOptionData(body)

Post Raw Option Data

time series data related to a single option (e.g. put on XYZ with strike at $123  expiring Jan 21, 2099)  - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: [&#x27;fut&#x27;, &#x27;eqt&#x27;, &#x27;ind&#x27;, &#x27;fx&#x27;] - **exchange**: one of: [&#x27;usetf&#x27;, &#x27;cme&#x27;, &#x27;ice&#x27;, &#x27;eurex&#x27;] - **option_month**: expiry month of the option chain format: yyyymm - **underlying_month**: maturity month of the underlying contract format: yyyymm - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **ltd**: last trading day of option chain. see info endpoint for choices. format: yyyymmdd - **putcall**: &#x60;put&#x60; or &#x60;call&#x60; - **strkpx**: strike price 125.5 ~ 125.49 e.g. will be recognized +1 minimum tick size - **metric**: choose one of the raw or derived data - **order**:  sorting order with respect to date

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.RawDataApi();
let body = new IVolApi.Query(); // Query | 

apiInstance.postRawOptionData(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Query**](Query.md)|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTopOiAndVolume"></a>
# **postTopOiAndVolume**
> ModelObject postTopOiAndVolume(body)

Post Top Oi And Volume

&#x27;Returns the open interest development of the top &#x60;n&#x60; strikes of an option chain

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.RawDataApi();
let body = new IVolApi.Query1(); // Query1 | 

apiInstance.postTopOiAndVolume(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Query1**](Query1.md)|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

