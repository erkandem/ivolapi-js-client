# ivolapi

IVolApi - JavaScript client for ivolapi
implied volatility and price data for selected ETFs and futures. Contact: info at volsurf.com
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0.3
- Package version: 3.0.3
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ivolapi --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var IVolApi = require('ivolapi');

var api = new IVolApi.APIHealthApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getHeartbeat(callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*IVolApi.APIHealthApi* | [**getHeartbeat**](docs/APIHealthApi.md#getHeartbeat) | **GET** /heartbeat | Get Heartbeat
*IVolApi.AuthApi* | [**postApiUserLogin**](docs/AuthApi.md#postApiUserLogin) | **POST** /login | Post Api User Login
*IVolApi.CompositeApi* | [**getIvolSummaryCme**](docs/CompositeApi.md#getIvolSummaryCme) | **GET** /ivol/summary/cme | get min, max, std, average and weekly data points for symbols on CME
*IVolApi.CompositeApi* | [**getIvolSummaryEurex**](docs/CompositeApi.md#getIvolSummaryEurex) | **GET** /ivol/summary/eurex | get min, max, std, average and weekly data points for symbols on EUREX
*IVolApi.CompositeApi* | [**getIvolSummaryIce**](docs/CompositeApi.md#getIvolSummaryIce) | **GET** /ivol/summary/ice | get min, max, std, average and weekly data points for sybmols on ICE
*IVolApi.CompositeApi* | [**getIvolSummarySingle**](docs/CompositeApi.md#getIvolSummarySingle) | **GET** /ivol/summary/single | get min, max, std, average and weekly data points
*IVolApi.CompositeApi* | [**getIvolSummaryUsetf**](docs/CompositeApi.md#getIvolSummaryUsetf) | **GET** /ivol/summary/usetf | get min, max, std, average and weekly data points for US ETFs
*IVolApi.CompositeApi* | [**getRiskReversal**](docs/CompositeApi.md#getRiskReversal) | **GET** /ivol/risk-reversal | Get the risk reversal of fitted implied volatility data
*IVolApi.CompositeApi* | [**postDeltaData**](docs/CompositeApi.md#postDeltaData) | **POST** /delta-contour | Post Delta Data
*IVolApi.CompositeApi* | [**postTopOiAndVolume**](docs/CompositeApi.md#postTopOiAndVolume) | **POST** /top-oi-and-volume | Post Top Oi And Volume
*IVolApi.ImpliedVolatilityApi* | [**getAtmIvol**](docs/ImpliedVolatilityApi.md#getAtmIvol) | **GET** /ivol/atm | Get ATM implied volatility data
*IVolApi.ImpliedVolatilityApi* | [**getInterSpread**](docs/ImpliedVolatilityApi.md#getInterSpread) | **GET** /ivol/inter-spread | get ivol spread between options with different underlying
*IVolApi.ImpliedVolatilityApi* | [**getIvol**](docs/ImpliedVolatilityApi.md#getIvol) | **GET** /ivol | Get implied volatility data for a single delta and single tte
*IVolApi.ImpliedVolatilityApi* | [**getIvolCalendar**](docs/ImpliedVolatilityApi.md#getIvolCalendar) | **GET** /ivol/calendar | Calculate the spread between different expiries
*IVolApi.ImpliedVolatilityApi* | [**getIvolSmile**](docs/ImpliedVolatilityApi.md#getIvolSmile) | **GET** /ivol/smile | smile
*IVolApi.ImpliedVolatilityApi* | [**getIvolSummaryCme**](docs/ImpliedVolatilityApi.md#getIvolSummaryCme) | **GET** /ivol/summary/cme | get min, max, std, average and weekly data points for symbols on CME
*IVolApi.ImpliedVolatilityApi* | [**getIvolSummaryEurex**](docs/ImpliedVolatilityApi.md#getIvolSummaryEurex) | **GET** /ivol/summary/eurex | get min, max, std, average and weekly data points for symbols on EUREX
*IVolApi.ImpliedVolatilityApi* | [**getIvolSummaryIce**](docs/ImpliedVolatilityApi.md#getIvolSummaryIce) | **GET** /ivol/summary/ice | get min, max, std, average and weekly data points for sybmols on ICE
*IVolApi.ImpliedVolatilityApi* | [**getIvolSummarySingle**](docs/ImpliedVolatilityApi.md#getIvolSummarySingle) | **GET** /ivol/summary/single | get min, max, std, average and weekly data points
*IVolApi.ImpliedVolatilityApi* | [**getIvolSummaryUsetf**](docs/ImpliedVolatilityApi.md#getIvolSummaryUsetf) | **GET** /ivol/summary/usetf | get min, max, std, average and weekly data points for US ETFs
*IVolApi.ImpliedVolatilityApi* | [**getRiskReversal**](docs/ImpliedVolatilityApi.md#getRiskReversal) | **GET** /ivol/risk-reversal | Get the risk reversal of fitted implied volatility data
*IVolApi.ImpliedVolatilityApi* | [**getSurfaceByDelta**](docs/ImpliedVolatilityApi.md#getSurfaceByDelta) | **GET** /ivol/surface | returns a surface parameterized by delta and constant time
*IVolApi.InfoApi* | [**getApiInfoExchanges**](docs/InfoApi.md#getApiInfoExchanges) | **GET** /info/exchanges | Get Api Info Exchanges
*IVolApi.InfoApi* | [**getApiInfoFirstAndLast**](docs/InfoApi.md#getApiInfoFirstAndLast) | **GET** /info/first-and-last | Get Api Info First And Last
*IVolApi.InfoApi* | [**getApiInfoLtd**](docs/InfoApi.md#getApiInfoLtd) | **GET** /info/last-trading-days | Get Api Info Ltd
*IVolApi.InfoApi* | [**getApiInfoOptionMonthAndUnderlyingMonth**](docs/InfoApi.md#getApiInfoOptionMonthAndUnderlyingMonth) | **GET** /info/option-month-and-underlying-month | Get Api Info Option Month And Underlying Month
*IVolApi.InfoApi* | [**getApiInfoSymbols**](docs/InfoApi.md#getApiInfoSymbols) | **GET** /info/symbols | Get Api Info Symbols
*IVolApi.InfoApi* | [**getApiInfoUsts**](docs/InfoApi.md#getApiInfoUsts) | **GET** /info/usts | Get Api Info Usts
*IVolApi.InfoApi* | [**postApiInfoStrikes**](docs/InfoApi.md#postApiInfoStrikes) | **POST** /info/strikes | Post Api Info Strikes
*IVolApi.PriceDataApi* | [**getContinuousEod**](docs/PriceDataApi.md#getContinuousEod) | **GET** /prices/eod/conti | Get Conti Eod
*IVolApi.PriceDataApi* | [**getContinuousEodAsArray**](docs/PriceDataApi.md#getContinuousEodAsArray) | **GET** /prices/eod/conti/array | Get Continuous Eod As Array
*IVolApi.PriceDataApi* | [**getContinuousEodSpread**](docs/PriceDataApi.md#getContinuousEodSpread) | **GET** /prices/eod/conti/spread | Get Continuous Eod Spread
*IVolApi.PriceDataApi* | [**getIntradayPrices**](docs/PriceDataApi.md#getIntradayPrices) | **GET** /prices/intraday | Get Intraday Prices
*IVolApi.PriceDataApi* | [**getPvpIntraday**](docs/PriceDataApi.md#getPvpIntraday) | **GET** /prices/intraday/pvp | price volume profile. histogram of intraday price data
*IVolApi.PriceDataApi* | [**getRegularFuturesEod**](docs/PriceDataApi.md#getRegularFuturesEod) | **GET** /prices/eod | Get Regular Futures Eod
*IVolApi.RawDataApi* | [**getAllOptionsSingleUnderlyingSingleDay**](docs/RawDataApi.md#getAllOptionsSingleUnderlyingSingleDay) | **GET** /option-data/single-underlying-single-day | Returns all options for one underlying for one (business)day
*IVolApi.RawDataApi* | [**postDeltaData**](docs/RawDataApi.md#postDeltaData) | **POST** /delta-contour | Post Delta Data
*IVolApi.RawDataApi* | [**postRawOptionData**](docs/RawDataApi.md#postRawOptionData) | **POST** /option-data | Post Raw Option Data
*IVolApi.RawDataApi* | [**postTopOiAndVolume**](docs/RawDataApi.md#postTopOiAndVolume) | **POST** /top-oi-and-volume | Post Top Oi And Volume
*IVolApi.UsersApi* | [**deleteApiUser**](docs/UsersApi.md#deleteApiUser) | **DELETE** /users/{username} | Delete Api User
*IVolApi.UsersApi* | [**deleteUserRole**](docs/UsersApi.md#deleteUserRole) | **DELETE** /users/{username}/roles/{role} | Delete User Role
*IVolApi.UsersApi* | [**getApiUsers**](docs/UsersApi.md#getApiUsers) | **GET** /users | Get Api Users
*IVolApi.UsersApi* | [**getUserRoles**](docs/UsersApi.md#getUserRoles) | **GET** /users/{username}/roles | Get User Roles
*IVolApi.UsersApi* | [**postAddNewApiUser**](docs/UsersApi.md#postAddNewApiUser) | **POST** /users | Post Add New Api User
*IVolApi.UsersApi* | [**putAddUserRole**](docs/UsersApi.md#putAddUserRole) | **PUT** /users/{username}/roles/{role} | Put Add User Role
*IVolApi.UsersApi* | [**putChangeUserPw**](docs/UsersApi.md#putChangeUserPw) | **PUT** /users/{username}/pw | Put Change User Pw

## Documentation for Models

 - [IVolApi.BodyPostApiUserLoginLoginPost](docs/BodyPostApiUserLoginLoginPost.md)
 - [IVolApi.Data](docs/Data.md)
 - [IVolApi.DeltaQuery](docs/DeltaQuery.md)
 - [IVolApi.GetStrikesModel](docs/GetStrikesModel.md)
 - [IVolApi.HTTPValidationError](docs/HTTPValidationError.md)
 - [IVolApi.HeartBeat](docs/HeartBeat.md)
 - [IVolApi.Query](docs/Query.md)
 - [IVolApi.Query1](docs/Query1.md)
 - [IVolApi.Query2](docs/Query2.md)
 - [IVolApi.RawOptionPy](docs/RawOptionPy.md)
 - [IVolApi.RegisterPy](docs/RegisterPy.md)
 - [IVolApi.SurfaceAggregate](docs/SurfaceAggregate.md)
 - [IVolApi.SurfaceValue](docs/SurfaceValue.md)
 - [IVolApi.Token](docs/Token.md)
 - [IVolApi.TopOiQuery](docs/TopOiQuery.md)
 - [IVolApi.UpdatePassword](docs/UpdatePassword.md)
 - [IVolApi.ValidationError](docs/ValidationError.md)
 - [IVolApi.VolaSummary](docs/VolaSummary.md)

## Documentation for Authorization


### OAuth2PasswordBearer

- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: 
  - : 

