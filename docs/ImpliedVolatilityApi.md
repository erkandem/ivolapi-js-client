# IVolApi.ImpliedVolatilityApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAtmIvol**](ImpliedVolatilityApi.md#getAtmIvol) | **GET** /ivol/atm | Get ATM implied volatility data
[**getInterSpread**](ImpliedVolatilityApi.md#getInterSpread) | **GET** /ivol/inter-spread | get ivol spread between options with different underlying
[**getIvol**](ImpliedVolatilityApi.md#getIvol) | **GET** /ivol | Get implied volatility data for a single delta and single tte
[**getIvolCalendar**](ImpliedVolatilityApi.md#getIvolCalendar) | **GET** /ivol/calendar | Calculate the spread between different expiries
[**getIvolSmile**](ImpliedVolatilityApi.md#getIvolSmile) | **GET** /ivol/smile | smile
[**getIvolSummaryCme**](ImpliedVolatilityApi.md#getIvolSummaryCme) | **GET** /ivol/summary/cme | get min, max, std, average and weekly data points for symbols on CME
[**getIvolSummaryEurex**](ImpliedVolatilityApi.md#getIvolSummaryEurex) | **GET** /ivol/summary/eurex | get min, max, std, average and weekly data points for symbols on EUREX
[**getIvolSummaryIce**](ImpliedVolatilityApi.md#getIvolSummaryIce) | **GET** /ivol/summary/ice | get min, max, std, average and weekly data points for sybmols on ICE
[**getIvolSummarySingle**](ImpliedVolatilityApi.md#getIvolSummarySingle) | **GET** /ivol/summary/single | get min, max, std, average and weekly data points
[**getIvolSummaryUsetf**](ImpliedVolatilityApi.md#getIvolSummaryUsetf) | **GET** /ivol/summary/usetf | get min, max, std, average and weekly data points for US ETFs
[**getRiskReversal**](ImpliedVolatilityApi.md#getRiskReversal) | **GET** /ivol/risk-reversal | Get the risk reversal of fitted implied volatility data
[**getSurfaceByDelta**](ImpliedVolatilityApi.md#getSurfaceByDelta) | **GET** /ivol/surface | returns a surface parameterized by delta and constant time

<a name="getAtmIvol"></a>
# **getAtmIvol**
> ModelObject getAtmIvol(symbol, opts)

Get ATM implied volatility data

At-the-money implied volatility time series.  - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: [&#x27;fut&#x27;, &#x27;eqt&#x27;, &#x27;ind&#x27;, &#x27;fx&#x27;] - **exchange**: one of: [&#x27;usetf&#x27;, &#x27;cme&#x27;, &#x27;ice&#x27;, &#x27;eurex&#x27;] - **tte**: time until expiry. 1m 3m 12m ... - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **order**:  sorting order with respect to date

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.ImpliedVolatilityApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'tte': "1m", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 30, // Number | 
  'order': "asc" // String | 
};
apiInstance.getAtmIvol(symbol, opts, (error, data, response) => {
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
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInterSpread"></a>
# **getInterSpread**
> ModelObject getInterSpread(symbol1, symbol2, opts)

get ivol spread between options with different underlying

Calculate the difference between two ETFs or generally between two implied volatility series  - **symbol1**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust1**: underlying security type: &#x27;eqt&#x27; e.g. - **exchange1**: one of: &#x27;usetf&#x27;, e.g. - **symbol2**: example: &#x27;EWZ&#x27; or &#x27;ewz&#x27; (case insensitive) - **ust2**: underlying security type: &#x27;eqt&#x27; e.g. - **exchange2**: one of: &#x27;usetf&#x27;, e.g. - **tte**: time &#x27;til expiry. 1m 3m 12m ... - **delta**: the delta at which to calculate the spread - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **order**:  sorting order with respect to date

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.ImpliedVolatilityApi();
let symbol1 = "symbol1_example"; // String | 
let symbol2 = "symbol2_example"; // String | 
let opts = { 
  'ust1': "ust1_example", // String | 
  'ust2': "ust2_example", // String | 
  'exchange1': "exchange1_example", // String | 
  'exchange2': "exchange2_example", // String | 
  'tte': "1m", // String | 
  'delta': "d050", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 30, // Number | 
  'order': "asc" // String | 
};
apiInstance.getInterSpread(symbol1, symbol2, opts, (error, data, response) => {
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
 **symbol1** | **String**|  | 
 **symbol2** | **String**|  | 
 **ust1** | **String**|  | [optional] 
 **ust2** | **String**|  | [optional] 
 **exchange1** | **String**|  | [optional] 
 **exchange2** | **String**|  | [optional] 
 **tte** | **String**|  | [optional] [default to 1m]
 **delta** | **String**|  | [optional] [default to d050]
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 30]
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIvol"></a>
# **getIvol**
> ModelObject getIvol(symbol, opts)

Get implied volatility data for a single delta and single tte

implied volatility time series. Return a proxy for ATM by default Default: d050 which is identical to the /ivol/atm route   - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: [&#x27;fut&#x27;, &#x27;eqt&#x27;, &#x27;ind&#x27;, &#x27;fx&#x27;] - **exchange**: one of: [&#x27;usetf&#x27;, &#x27;cme&#x27;, &#x27;ice&#x27;, &#x27;eurex&#x27;] - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **tte**: time until expiry. 1m 3m 12m ... - **delta**: e.g. d050 (default) - **order**:  sorting order with respect  to date

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.ImpliedVolatilityApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 30, // Number | 
  'tte': "1m", // String | 
  'delta': "d050", // String | 
  'order': "asc" // String | 
};
apiInstance.getIvol(symbol, opts, (error, data, response) => {
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
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 30]
 **tte** | **String**|  | [optional] [default to 1m]
 **delta** | **String**|  | [optional] [default to d050]
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIvolCalendar"></a>
# **getIvolCalendar**
> ModelObject getIvolCalendar(symbol, opts)

Calculate the spread between different expiries

A calendar spread is the difference of implied volatility between two different expiry dates and optionally different deltas.   - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; e.g., case insensitive - **ust**: underlying security type: &#x27;eqt&#x27; e.g. - **exchange**: one of: &#x27;usetf&#x27; e.g. - **tte**: time until expiry: &#x27;1m&#x27;, &#x27;2m&#x27;, &#x27;3m&#x27; e.g. - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **tt1**: time &#x27;til expiry of first leg - **tt2**: time &#x27;til expiry of second leg - **delta1**: manually set the first delta leg - **delta2**: manually set the second delta leg - **order**:  sorting order with respect to date

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.ImpliedVolatilityApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 30, // Number | 
  'tte1': "1m", // String | 
  'tte2': "2m", // String | 
  'delta1': "d050", // String | 
  'delta2': "d050", // String | 
  'order': "asc" // String | 
};
apiInstance.getIvolCalendar(symbol, opts, (error, data, response) => {
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
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 30]
 **tte1** | **String**|  | [optional] [default to 1m]
 **tte2** | **String**|  | [optional] [default to 2m]
 **delta1** | **String**|  | [optional] [default to d050]
 **delta2** | **String**|  | [optional] [default to d050]
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIvolSmile"></a>
# **getIvolSmile**
> ModelObject getIvolSmile(symbol, opts)

smile

&#x60;smile&#x60; is defined as the implied volatility curve of one expiry at one date. The curve being the implied volatility from out-of-the-money puts to out-of-the-money calls.  - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: [&#x27;fut&#x27;, &#x27;eqt&#x27;, &#x27;ind&#x27;, &#x27;fx&#x27;] - **exchange**: one of: [&#x27;usetf&#x27;, &#x27;cme&#x27;, &#x27;ice&#x27;, &#x27;eurex&#x27;] - **tte**: time until expiry. 1m 3m 12m ... - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **order**:  sorting order with respect to date

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.ImpliedVolatilityApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'tte': "1m", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 30, // Number | 
  'order': "asc" // String | 
};
apiInstance.getIvolSmile(symbol, opts, (error, data, response) => {
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
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

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

let apiInstance = new IVolApi.ImpliedVolatilityApi();
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

let apiInstance = new IVolApi.ImpliedVolatilityApi();
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

let apiInstance = new IVolApi.ImpliedVolatilityApi();
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

let apiInstance = new IVolApi.ImpliedVolatilityApi();
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

let apiInstance = new IVolApi.ImpliedVolatilityApi();
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

let apiInstance = new IVolApi.ImpliedVolatilityApi();
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

<a name="getSurfaceByDelta"></a>
# **getSurfaceByDelta**
> [SurfaceAggregate] getSurfaceByDelta(symbol, opts)

returns a surface parameterized by delta and constant time

- **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **ust**: underlying security type: [&#x27;fut&#x27;, &#x27;eqt&#x27;, &#x27;ind&#x27;, &#x27;fx&#x27;] - **exchange**: one of: [&#x27;usetf&#x27;, &#x27;cme&#x27;, &#x27;ice&#x27;, &#x27;eurex&#x27;] - **date**&#x27; date of implied volatility surface to be returned

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.ImpliedVolatilityApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  '_date': new Date("2013-10-20"), // Date | 
  'exchange': "exchange_example", // String | 
  'ust': "ust_example" // String | 
};
apiInstance.getSurfaceByDelta(symbol, opts, (error, data, response) => {
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
 **_date** | **Date**|  | [optional] 
 **exchange** | **String**|  | [optional] 
 **ust** | **String**|  | [optional] 

### Return type

[**[SurfaceAggregate]**](SurfaceAggregate.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

