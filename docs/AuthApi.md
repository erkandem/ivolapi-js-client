# IVolApi.AuthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postApiUserLogin**](AuthApi.md#postApiUserLogin) | **POST** /login | Post Api User Login

<a name="postApiUserLogin"></a>
# **postApiUserLogin**
> Token postApiUserLogin(grantTypeusernamepasswordscopeclientIdclientSecret)

Post Api User Login

### Example
```javascript
import IVolApi from 'i_vol_api';

let apiInstance = new IVolApi.AuthApi();
let grantType = "grantType_example"; // String | 
let username = "username_example"; // String | 
let password = "password_example"; // String | 
let scope = "scope_example"; // String | 
let clientId = "clientId_example"; // String | 
let clientSecret = "clientSecret_example"; // String | 

apiInstance.postApiUserLogin(grantTypeusernamepasswordscopeclientIdclientSecret, (error, data, response) => {
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
 **grantType** | **String**|  | 
 **username** | **String**|  | 
 **password** | **String**|  | 
 **scope** | **String**|  | 
 **clientId** | **String**|  | 
 **clientSecret** | **String**|  | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

