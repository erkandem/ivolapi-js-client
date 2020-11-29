# IVolApi.PriceDataApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContinuousEod**](PriceDataApi.md#getContinuousEod) | **GET** /prices/eod/conti | Get Conti Eod
[**getContinuousEodAsArray**](PriceDataApi.md#getContinuousEodAsArray) | **GET** /prices/eod/conti/array | Get Continuous Eod As Array
[**getContinuousEodSpread**](PriceDataApi.md#getContinuousEodSpread) | **GET** /prices/eod/conti/spread | Get Continuous Eod Spread
[**getIntradayPrices**](PriceDataApi.md#getIntradayPrices) | **GET** /prices/intraday | Get Intraday Prices
[**getPvpIntraday**](PriceDataApi.md#getPvpIntraday) | **GET** /prices/intraday/pvp | price volume profile. histogram of intraday price data
[**getRegularFuturesEod**](PriceDataApi.md#getRegularFuturesEod) | **GET** /prices/eod | Get Regular Futures Eod

<a name="getContinuousEod"></a>
# **getContinuousEod**
> ModelObject getContinuousEod(symbol, opts)

Get Conti Eod

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.PriceDataApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'ust': "fut", // String | 
  'exchange': "exchange_example", // String | 
  'nthcontract': 1, // Number | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 20, // Number | 
  'order': "asc" // String | 
};
apiInstance.getContinuousEod(symbol, opts, (error, data, response) => {
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
 **ust** | **String**|  | [optional] [default to fut]
 **exchange** | **String**|  | [optional] 
 **nthcontract** | **Number**|  | [optional] [default to 1]
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 20]
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getContinuousEodAsArray"></a>
# **getContinuousEodAsArray**
> ModelObject getContinuousEodAsArray(symbol, opts)

Get Continuous Eod As Array

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.PriceDataApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'ust': "fut", // String | 
  'exchange': "exchange_example", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 20, // Number | 
  'order': "asc" // String | 
};
apiInstance.getContinuousEodAsArray(symbol, opts, (error, data, response) => {
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
 **ust** | **String**|  | [optional] [default to fut]
 **exchange** | **String**|  | [optional] 
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 20]
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getContinuousEodSpread"></a>
# **getContinuousEodSpread**
> ModelObject getContinuousEodSpread(symbol, opts)

Get Continuous Eod Spread

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.PriceDataApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'ust': "fut", // String | 
  'exchange': "exchange_example", // String | 
  'nthcontract1': 1, // Number | 
  'nthcontract2': 2, // Number | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 20, // Number | 
  'order': "asc" // String | 
};
apiInstance.getContinuousEodSpread(symbol, opts, (error, data, response) => {
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
 **ust** | **String**|  | [optional] [default to fut]
 **exchange** | **String**|  | [optional] 
 **nthcontract1** | **Number**|  | [optional] [default to 1]
 **nthcontract2** | **Number**|  | [optional] [default to 2]
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 20]
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIntradayPrices"></a>
# **getIntradayPrices**
> ModelObject getIntradayPrices(symbol, opts)

Get Intraday Prices

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.PriceDataApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'month': "month_example", // String | 
  'year': 56, // Number | 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 20, // Number | 
  'interval': "1", // String | 
  'iunit': "minutes", // String | 
  'order': "asc" // String | 
};
apiInstance.getIntradayPrices(symbol, opts, (error, data, response) => {
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
 **month** | **String**|  | [optional] 
 **year** | **Number**|  | [optional] 
 **ust** | **String**|  | [optional] 
 **exchange** | **String**|  | [optional] 
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 20]
 **interval** | **String**|  | [optional] [default to 1]
 **iunit** | **String**|  | [optional] [default to minutes]
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPvpIntraday"></a>
# **getPvpIntraday**
> ModelObject getPvpIntraday(symbol, opts)

price volume profile. histogram of intraday price data

price volume profile. histogram of intraday price data  - **symbol**: example: &#x27;SPY&#x27; or &#x27;spy&#x27; (case insensitive) - **month**: only for futures - one of [&#x27;F&#x27;, &#x27;G&#x27;, &#x27;H&#x27;, &#x27;J&#x27;, &#x27;K&#x27;, &#x27;M&#x27;, &#x27;N&#x27;, &#x27;Q&#x27;, &#x27;U&#x27;, &#x27;V&#x27;, &#x27;X&#x27;, &#x27;Z&#x27;] - **year**: only for futures - example: 19 - **ust**: underlying security type: [&#x27;fut&#x27;, &#x27;eqt&#x27;, &#x27;ind&#x27;, &#x27;fx&#x27;] - **exchange**: one of: [&#x27;usetf&#x27;, &#x27;cme&#x27;, &#x27;ice&#x27;, &#x27;eurex&#x27;] - **startdate**: format: yyyy-mm-dd - **enddate**: format: yyyy-mm-dd - **dminus**: indicate the number of days back from &#x60;enddate&#x60; - **buckets**: number of intervals in the histogram - **iunit**: one of [&#x27;minutes&#x27;, &#x27;hour, &#x27;day&#x27;, &#x27;week&#x27;, &#x27;month&#x27;] - **order**:  sorting order with respect to price interval

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.PriceDataApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'month': "month_example", // String | 
  'year': 56, // Number | 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 20, // Number | 
  'buckets': 100, // Number | 
  'iunit': "minutes", // String | 
  'order': "asc" // String | 
};
apiInstance.getPvpIntraday(symbol, opts, (error, data, response) => {
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
 **month** | **String**|  | [optional] 
 **year** | **Number**|  | [optional] 
 **ust** | **String**|  | [optional] 
 **exchange** | **String**|  | [optional] 
 **startdate** | **Date**|  | [optional] 
 **enddate** | **Date**|  | [optional] 
 **dminus** | **Number**|  | [optional] [default to 20]
 **buckets** | **Number**|  | [optional] [default to 100]
 **iunit** | **String**|  | [optional] [default to minutes]
 **order** | **String**|  | [optional] [default to asc]

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRegularFuturesEod"></a>
# **getRegularFuturesEod**
> ModelObject getRegularFuturesEod(symbol, opts)

Get Regular Futures Eod

end of day prices 

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.PriceDataApi();
let symbol = "symbol_example"; // String | 
let opts = { 
  'month': "month_example", // String | 
  'year': 56, // Number | 
  'ust': "ust_example", // String | 
  'exchange': "exchange_example", // String | 
  'startdate': new Date("2013-10-20"), // Date | 
  'enddate': new Date("2013-10-20"), // Date | 
  'dminus': 30, // Number | 
  'order': "asc" // String | 
};
apiInstance.getRegularFuturesEod(symbol, opts, (error, data, response) => {
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
 **month** | **String**|  | [optional] 
 **year** | **Number**|  | [optional] 
 **ust** | **String**|  | [optional] 
 **exchange** | **String**|  | [optional] 
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

