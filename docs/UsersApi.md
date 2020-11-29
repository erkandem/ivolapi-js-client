# IVolApi.UsersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteApiUser**](UsersApi.md#deleteApiUser) | **DELETE** /users/{username} | Delete Api User
[**deleteUserRole**](UsersApi.md#deleteUserRole) | **DELETE** /users/{username}/roles/{role} | Delete User Role
[**getApiUsers**](UsersApi.md#getApiUsers) | **GET** /users | Get Api Users
[**getUserRoles**](UsersApi.md#getUserRoles) | **GET** /users/{username}/roles | Get User Roles
[**postAddNewApiUser**](UsersApi.md#postAddNewApiUser) | **POST** /users | Post Add New Api User
[**putAddUserRole**](UsersApi.md#putAddUserRole) | **PUT** /users/{username}/roles/{role} | Put Add User Role
[**putChangeUserPw**](UsersApi.md#putChangeUserPw) | **PUT** /users/{username}/pw | Put Change User Pw

<a name="deleteApiUser"></a>
# **deleteApiUser**
> ModelObject deleteApiUser(username)

Delete Api User

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.UsersApi();
let username = "username_example"; // String | 

apiInstance.deleteApiUser(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteUserRole"></a>
# **deleteUserRole**
> ModelObject deleteUserRole(username, role)

Delete User Role

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.UsersApi();
let username = "username_example"; // String | 
let role = "role_example"; // String | 

apiInstance.deleteUserRole(username, role, (error, data, response) => {
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
 **username** | **String**|  | 
 **role** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApiUsers"></a>
# **getApiUsers**
> ModelObject getApiUsers()

Get Api Users

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.UsersApi();
apiInstance.getApiUsers((error, data, response) => {
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

<a name="getUserRoles"></a>
# **getUserRoles**
> ModelObject getUserRoles(username)

Get User Roles

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.UsersApi();
let username = "username_example"; // String | 

apiInstance.getUserRoles(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postAddNewApiUser"></a>
# **postAddNewApiUser**
> ModelObject postAddNewApiUser(body)

Post Add New Api User

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.UsersApi();
let body = new IVolApi.RegisterPy(); // RegisterPy | 

apiInstance.postAddNewApiUser(body, (error, data, response) => {
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
 **body** | [**RegisterPy**](RegisterPy.md)|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putAddUserRole"></a>
# **putAddUserRole**
> ModelObject putAddUserRole(username, role)

Put Add User Role

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.UsersApi();
let username = "username_example"; // String | 
let role = "role_example"; // String | 

apiInstance.putAddUserRole(username, role, (error, data, response) => {
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
 **username** | **String**|  | 
 **role** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putChangeUserPw"></a>
# **putChangeUserPw**
> ModelObject putChangeUserPw(bodyusername)

Put Change User Pw

### Example
```javascript
import IVolApi from 'i_vol_api';
let defaultClient = IVolApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new IVolApi.UsersApi();
let body = new IVolApi.UpdatePassword(); // UpdatePassword | 
let username = "username_example"; // String | 

apiInstance.putChangeUserPw(bodyusername, (error, data, response) => {
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
 **body** | [**UpdatePassword**](UpdatePassword.md)|  | 
 **username** | **String**|  | 

### Return type

[**ModelObject**](ModelObject.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

