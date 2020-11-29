# IVolApi.CompositeApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIvolSummaryCme**](CompositeApi.md#getIvolSummaryCme) | **GET** /ivol/summary/cme | get min, max, std, average and weekly data points for symbols on CME
[**getIvolSummaryEurex**](CompositeApi.md#getIvolSummaryEurex) | **GET** /ivol/summary/eurex | get min, max, std, average and weekly data points for symbols on EUREX
[**getIvolSummaryIce**](CompositeApi.md#getIvolSummaryIce) | **GET** /ivol/summary/ice | get min, max, std, average and weekly data points for sybmols on ICE
[**getIvolSummarySingle**](CompositeApi.md#getIvolSummarySingle) | **GET** /ivol/summary/single | get min, max, std, average and weekly data points
[**getIvolSummaryUsetf**](CompositeApi.md#getIvolSummaryUsetf) | **GET** /ivol/summary/usetf | get min, max, std, average and weekly data points for US ETFs
[**getRiskReversal**](CompositeApi.md#getRiskReversal) | **GET** /ivol/risk-reversal | Get the risk reversal of fitted implied volatility data
[**postDeltaData**](CompositeApi.md#postDeltaData) | **POST** /delta-contour | Post Delta Data
[**postTopOiAndVolume**](CompositeApi.md#postTopOiAndVolume) | **POST** /top-oi-and-volume | Post Top Oi And Volume

<a name="getIvolSummaryCme"></a>
# **getIvolSummaryCme**
> ModelObject getIvolSummaryCme()

get min, max, std, average and weekly data points for symbols on CME

Returns descriptive statistics and some slices of data for for selected symbols traded at CME

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.CompositeApi();
apiInstance.getIvolSummaryCme((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIvolSummaryEurex"></a>
# **getIvolSummaryEurex**
> [VolaSummary] getIvolSummaryEurex()

get min, max, std, average and weekly data points for symbols on EUREX

Returns descriptive statistics and some slices of data for selected symbols traded at EUREX

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.CompositeApi();
apiInstance.getIvolSummaryEurex((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[VolaSummary]**](VolaSummary.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIvolSummaryIce"></a>
# **getIvolSummaryIce**
> [VolaSummary] getIvolSummaryIce()

get min, max, std, average and weekly data points for sybmols on ICE

Returns descriptive statistics and some slices of data for symbols traded at ICE

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.CompositeApi();
apiInstance.getIvolSummaryIce((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[VolaSummary]**](VolaSummary.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIvolSummarySingle"></a>
# **getIvolSummarySingle**
> VolaSummary getIvolSummarySingle(symbol, opts)

get min, max, std, average and weekly data points

Returns descriptive statistics and some slices of implied volatility data last, 1 week, 2 week, 3 week, 4 week, 5 week and 6 week ago  - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: &#x27;eqt&#x27; e.g. - **exchange**: one of: &#x27;usetf&#x27;, e.g. - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **tte**: time &#x27;til expiry: 1m 3m 12m ... - **delta**: a single delta. d050 by default.

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.CompositeApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'tte': "1m", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 365, // Number | 
  'delta': "d050" // String | 
};
apiInstance.getIvolSummarySingle(symbol, opts, (error, data, response) => {
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
 **ust** | **String**|  | [optional] 
 **exchange** | **String**|  | [optional] 
 **tte** | **String**|  | [optional] [default to 1m]
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 365]
 **delta** | **String**|  | [optional] [default to d050]

### Return type

[**VolaSummary**](VolaSummary.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIvolSummaryUsetf"></a>
# **getIvolSummaryUsetf**
> [VolaSummary] getIvolSummaryUsetf()

get min, max, std, average and weekly data points for US ETFs

Returns descriptive statistics and some slices of data for selected US ETFs

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.CompositeApi();
apiInstance.getIvolSummaryUsetf((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[VolaSummary]**](VolaSummary.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRiskReversal"></a>
# **getRiskReversal**
> ModelObject getRiskReversal(symbol, opts)

Get the risk reversal of fitted implied volatility data

Get the risk reversal of fitted implied volatility data for &#x60;symbol&#x60;.  Essentially the risk reversal is a measure of the volatility skew. supplied only &#x60;offset&#x60; will be parsed. Minimally supply &#x60;symbol&#x60;. The backend will try to resolve the dependent query parameters such as security type &#x60;ust&#x60; and &#x60;exchange&#x60; or set defaults.  Calculation:  &gt;rr &#x3D; σ(delta1) - σ(delta2)  Example:  &gt;delta1 &#x3D; 60 (otm put with 40 delta)  &gt;delta2 &#x3D; 40 (otm call with 40 delta)  &gt;rr &#x3D; σ(|Δ_put| &#x3D; 40) - σ(|Δ_call| &#x3D; 40)  For an average equities rr will be positive on average.  - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: [&#x27;fut&#x27;, &#x27;eqt&#x27;, &#x27;ind&#x27;, &#x27;fx&#x27;] - **exchange**: one of: [&#x27;usetf&#x27;, &#x27;cme&#x27;, &#x27;ice&#x27;, &#x27;eurex&#x27;] - **tte**: time until expiry. 1m 3m 12m ... - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **delta1**: manually set the first delta leg - **delta2**: manually set the second delta leg - **order**:  sorting order with respect to date

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.CompositeApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'tte': "1m", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 30, // Number | 
  'delta1': "d060", // String | 
  'delta2': "d040", // String | 
  'order': "asc" // String | 
};
apiInstance.getRiskReversal(symbol, opts, (error, data, response) => {
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
 **ust** | **String**|  | [optional] 
 **exchange** | **String**|  | [optional] 
 **tte** | **String**|  | [optional] [default to 1m]
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 30]
 **delta1** | **String**|  | [optional] [default to d060]
 **delta2** | **String**|  | [optional] [default to d040]
 **order** | **String**|  | [optional] [default to asc]

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

let apiInstance = new IVolApi.CompositeApi();
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

let apiInstance = new IVolApi.CompositeApi();
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

