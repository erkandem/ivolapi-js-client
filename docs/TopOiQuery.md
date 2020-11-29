# IVolApi.TopOiQuery

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ust** | **String** |  | 
**exchange** | **String** |  | 
**symbol** | **String** |  | 
**ltd** | **String** |  | 
**putcall** | **String** |  | 
**metric** | **String** |  | 
**optionMonth** | **String** |  | [optional] 
**underlyingMonth** | **String** |  | [optional] 
**startdate** | **String** |  | [optional] 
**enddate** | **String** |  | [optional] 
**dminus** | **Number** |  | [optional] [default to 60]
**order** | **String** |  | [optional] [default to &#x27;asc&#x27;]
**topN** | **Number** |  | [optional] [default to 5]

<a name="PutcallEnum"></a>
## Enum: PutcallEnum

* `put` (value: `"put"`)
* `call` (value: `"call"`)


<a name="OrderEnum"></a>
## Enum: OrderEnum

* `asc` (value: `"asc"`)
* `desc` (value: `"desc"`)

