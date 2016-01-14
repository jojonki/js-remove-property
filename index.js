// Copyright 2016 jojonki

'use strict';

/*
 * Remove specific properties recursively from object.
 *
 * @param {String} key - property name you want to remove
 * @param {Object} obj - target object
 */
var removeProperties = (key, obj) => {
	if (!key || !obj) return;
	if (typeof obj === 'object') {
		delete obj[key];
		Object.keys(obj).forEach(x => removeProperties(key, obj[x]));
	} else if (Array.isArray(obj)) {
		obj.forEach(val => removeProperties(key, val));
	}
};

module.exports = removeProperties;
