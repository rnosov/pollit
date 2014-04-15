'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var ResponseSchema = new Schema({
	firstNames : String,
	surname: String,
	email: String,
	ref: String,
	address:{
		premiseNumber:Number,
		premiseName:String,
		postcode:String,
		lat:Number,
		long:Number
	}
});


mongoose.model('Response', ResponseSchema);
