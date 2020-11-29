# IVolApi.RawOptionPy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ust** | **String** |  | 
**exchange** | **String** |  | 
**symbol** | **String** |  | 
**ltd** | **String** |  | 
**putcall** | **String** |  | 
**strkpx** | **Number** |  | 
**metric** | **String** |  | 
**startdate** | **String** |  | 
**enddate** | **String** |  | 
**optionMonth** | **String** |  | [optional] 
**underlyingMonth** | **String** |  | [optional] 
**dminus** | **Number** |  | [optional] [default to 30]
**order** | **String** |  | [optional] [default to &#x27;asc&#x27;]

<a name="PutcallEnum"></a>
## Enum: PutcallEnum

* `put` (value: `"put"`)
* `call` (value: `"call"`)


<a name="MetricEnum"></a>
## Enum: MetricEnum

* `underlying_price` (value: `"underlying_price"`)
* `settlement_price` (value: `"settlement_price"`)
* `volume` (value: `"volume"`)
* `open_interest` (value: `"open_interest"`)
* `years_until_expiry` (value: `"years_until_expiry"`)
* `moneyness` (value: `"moneyness"`)
* `dividend_yield` (value: `"dividend_yield"`)
* `riskfree_rate` (value: `"riskfree_rate"`)
* `rawiv` (value: `"rawiv"`)
* `delta` (value: `"delta"`)
* `time_value` (value: `"time_value"`)


<a name="OrderEnum"></a>
## Enum: OrderEnum

* `asc` (value: `"asc"`)
* `desc` (value: `"desc"`)

