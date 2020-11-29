/**
 * iVolAPI
 * implied volatility and price data for selected ETFs and futures. Contact: info at volsurf.com
 *
 * OpenAPI spec version: 3.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The VolaSummary model module.
* @module model/VolaSummary
* @version 3.0.3
*/
export default class VolaSummary {
    /**
    * Constructs a new <code>VolaSummary</code>.
    * @alias module:model/VolaSummary
    * @class
    * @param symbol {String} 
    * @param startDate {Date} 
    * @param endDate {Date} 
    * @param delta {String} 
    * @param expiry {String} 
    * @param standardDev {Number} 
    * @param average {Number} 
    * @param min {Number} 
    * @param max {Number} 
    * @param observations {Number} 
    * @param last {Number} 
    * @param weekAgoOne {Number} 
    * @param weekAgoTwo {Number} 
    * @param weekAgoThree {Number} 
    * @param weekAgoFour {Number} 
    * @param weekAgoFive {Number} 
    * @param weekAgoSix {Number} 
    */

    constructor(symbol, startDate, endDate, delta, expiry, standardDev, average, min, max, observations, last, weekAgoOne, weekAgoTwo, weekAgoThree, weekAgoFour, weekAgoFive, weekAgoSix) {
        
        
        this['symbol'] = symbol;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
        this['delta'] = delta;
        this['expiry'] = expiry;
        this['standard_dev'] = standardDev;
        this['average'] = average;
        this['min'] = min;
        this['max'] = max;
        this['observations'] = observations;
        this['last'] = last;
        this['week_ago_one'] = weekAgoOne;
        this['week_ago_two'] = weekAgoTwo;
        this['week_ago_three'] = weekAgoThree;
        this['week_ago_four'] = weekAgoFour;
        this['week_ago_five'] = weekAgoFive;
        this['week_ago_six'] = weekAgoSix;
        
    }

    /**
    * Constructs a <code>VolaSummary</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VolaSummary} obj Optional instance to populate.
    * @return {module:model/VolaSummary} The populated <code>VolaSummary</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VolaSummary();
                        
            
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
            }
            if (data.hasOwnProperty('end_date')) {
                obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
            }
            if (data.hasOwnProperty('delta')) {
                obj['delta'] = ApiClient.convertToType(data['delta'], 'String');
            }
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'String');
            }
            if (data.hasOwnProperty('standard_dev')) {
                obj['standard_dev'] = ApiClient.convertToType(data['standard_dev'], 'Number');
            }
            if (data.hasOwnProperty('average')) {
                obj['average'] = ApiClient.convertToType(data['average'], 'Number');
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'Number');
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'Number');
            }
            if (data.hasOwnProperty('observations')) {
                obj['observations'] = ApiClient.convertToType(data['observations'], 'Number');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'Number');
            }
            if (data.hasOwnProperty('week_ago_one')) {
                obj['week_ago_one'] = ApiClient.convertToType(data['week_ago_one'], 'Number');
            }
            if (data.hasOwnProperty('week_ago_two')) {
                obj['week_ago_two'] = ApiClient.convertToType(data['week_ago_two'], 'Number');
            }
            if (data.hasOwnProperty('week_ago_three')) {
                obj['week_ago_three'] = ApiClient.convertToType(data['week_ago_three'], 'Number');
            }
            if (data.hasOwnProperty('week_ago_four')) {
                obj['week_ago_four'] = ApiClient.convertToType(data['week_ago_four'], 'Number');
            }
            if (data.hasOwnProperty('week_ago_five')) {
                obj['week_ago_five'] = ApiClient.convertToType(data['week_ago_five'], 'Number');
            }
            if (data.hasOwnProperty('week_ago_six')) {
                obj['week_ago_six'] = ApiClient.convertToType(data['week_ago_six'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} symbol
    */
    'symbol' = undefined;
    /**
    * @member {Date} start_date
    */
    'start_date' = undefined;
    /**
    * @member {Date} end_date
    */
    'end_date' = undefined;
    /**
    * @member {String} delta
    */
    'delta' = undefined;
    /**
    * @member {String} expiry
    */
    'expiry' = undefined;
    /**
    * @member {Number} standard_dev
    */
    'standard_dev' = undefined;
    /**
    * @member {Number} average
    */
    'average' = undefined;
    /**
    * @member {Number} min
    */
    'min' = undefined;
    /**
    * @member {Number} max
    */
    'max' = undefined;
    /**
    * @member {Number} observations
    */
    'observations' = undefined;
    /**
    * @member {Number} last
    */
    'last' = undefined;
    /**
    * @member {Number} week_ago_one
    */
    'week_ago_one' = undefined;
    /**
    * @member {Number} week_ago_two
    */
    'week_ago_two' = undefined;
    /**
    * @member {Number} week_ago_three
    */
    'week_ago_three' = undefined;
    /**
    * @member {Number} week_ago_four
    */
    'week_ago_four' = undefined;
    /**
    * @member {Number} week_ago_five
    */
    'week_ago_five' = undefined;
    /**
    * @member {Number} week_ago_six
    */
    'week_ago_six' = undefined;




}
