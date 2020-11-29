# IVolApi.InfoApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiInfoExchanges**](InfoApi.md#getApiInfoExchanges) | **GET** /info/exchanges | Get Api Info Exchanges
[**getApiInfoFirstAndLast**](InfoApi.md#getApiInfoFirstAndLast) | **GET** /info/first-and-last | Get Api Info First And Last
[**getApiInfoLtd**](InfoApi.md#getApiInfoLtd) | **GET** /info/last-trading-days | Get Api Info Ltd
[**getApiInfoOptionMonthAndUnderlyingMonth**](InfoApi.md#getApiInfoOptionMonthAndUnderlyingMonth) | **GET** /info/option-month-and-underlying-month | Get Api Info Option Month And Underlying Month
[**getApiInfoSymbols**](InfoApi.md#getApiInfoSymbols) | **GET** /info/symbols | Get Api Info Symbols
[**getApiInfoUsts**](InfoApi.md#getApiInfoUsts) | **GET** /info/usts | Get Api Info Usts
[**postApiInfoStrikes**](InfoApi.md#postApiInfoStrikes) | **POST** /info/strikes | Post Api Info Strikes

<a name="getApiInfoExchanges"></a>
# **getApiInfoExchanges**
> ModelObject getApiInfoExchanges(ust)

Get Api Info Exchanges

return available &#x60;&#x60;exchange&#x60;&#x60; for a given &#x60;&#x60;ust&#x60;&#x60;

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.InfoApi();
let ust = "ust_example"; // String | 

apiInstance.getApiInfoExchanges(ust, (error, data, response) => {
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
 **ust** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApiInfoFirstAndLast"></a>
# **getApiInfoFirstAndLast**
> ModelObject getApiInfoFirstAndLast(ust, exchange, symbol, ltd, opts)

Get Api Info First And Last

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.InfoApi();
let ust = "ust_example"; // String | 
let exchange = "exchange_example"; // String | 
let symbol = "symbol_example"; // String | 
let ltd = "ltd_example"; // String | 
let opts = { 
  'optionMonth': "optionMonth_example", // String | 
  'underlyingMonth': "underlyingMonth_example" // String | 
};
apiInstance.getApiInfoFirstAndLast(ust, exchange, symbol, ltd, opts, (error, data, response) => {
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
 **ust** | **String**|  | 
 **exchange** | **String**|  | 
 **symbol** | **String**|  | 
 **ltd** | **String**|  | 
 **optionMonth** | **String**|  | [optional] 
 **underlyingMonth** | **String**|  | [optional] 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApiInfoLtd"></a>
# **getApiInfoLtd**
> ModelObject getApiInfoLtd(ust, exchange, symbol)

Get Api Info Ltd

return &#x60;&#x60;ltd&#x60;&#x60; given &#x60;&#x60;ust&#x60;&#x60;, &#x60;&#x60;exchange&#x60;&#x60;, &#x60;&#x60;symbol&#x60;&#x60;

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.InfoApi();
let ust = "ust_example"; // String | 
let exchange = "exchange_example"; // String | 
let symbol = "symbol_example"; // String | 

apiInstance.getApiInfoLtd(ust, exchange, symbol, (error, data, response) => {
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
 **ust** | **String**|  | 
 **exchange** | **String**|  | 
 **symbol** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApiInfoOptionMonthAndUnderlyingMonth"></a>
# **getApiInfoOptionMonthAndUnderlyingMonth**
> ModelObject getApiInfoOptionMonthAndUnderlyingMonth(ust, exchange, symbol, ltd)

Get Api Info Option Month And Underlying Month

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.InfoApi();
let ust = "ust_example"; // String | 
let exchange = "exchange_example"; // String | 
let symbol = "symbol_example"; // String | 
let ltd = "ltd_example"; // String | 

apiInstance.getApiInfoOptionMonthAndUnderlyingMonth(ust, exchange, symbol, ltd, (error, data, response) => {
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
 **ust** | **String**|  | 
 **exchange** | **String**|  | 
 **symbol** | **String**|  | 
 **ltd** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApiInfoSymbols"></a>
# **getApiInfoSymbols**
> ModelObject getApiInfoSymbols(ust, exchange)

Get Api Info Symbols

return symbols according to &#x60;&#x60;ust&#x60;&#x60; and/or &#x60;&#x60;exchange&#x60;&#x60;

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.InfoApi();
let ust = "ust_example"; // String | 
let exchange = "exchange_example"; // String | 

apiInstance.getApiInfoSymbols(ust, exchange, (error, data, response) => {
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
 **ust** | **String**|  | 
 **exchange** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApiInfoUsts"></a>
# **getApiInfoUsts**
> ModelObject getApiInfoUsts()

Get Api Info Usts

return available &#x60;&#x60;ust&#x60;&#x60;

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.InfoApi();
apiInstance.getApiInfoUsts((error, data, response) => {
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

<a name="postApiInfoStrikes"></a>
# **postApiInfoStrikes**
> ModelObject postApiInfoStrikes(body)

Post Api Info Strikes

same as &#x60;GET&#x60; route, but containing the query within the body

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.InfoApi();
let body = new IVolApi.Data(); // Data | 

apiInstance.postApiInfoStrikes(body, (error, data, response) => {
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
 **body** | [**Data**](Data.md)|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

