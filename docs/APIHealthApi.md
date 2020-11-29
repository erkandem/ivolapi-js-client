# IVolApi.APIHealthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHeartbeat**](APIHealthApi.md#getHeartbeat) | **GET** /heartbeat | Get Heartbeat

<a name="getHeartbeat"></a>
# **getHeartbeat**
> HeartBeat getHeartbeat()

Get Heartbeat

### Example
```javascript
import IVolApi from 'i_vol_api';

let apiInstance = new IVolApi.APIHealthApi();
apiInstance.getHeartbeat((error, data, response) => {
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

[**HeartBeat**](HeartBeat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

