// Copyright 2016 jojonki

'use strict';

/*
 * Remove specific properties from JavaScript object
 *
 * @param {String} del_key
 * @param {Object} elm
 */
var removePropertyObject = function removeProp(del_key, elm) {
  if(elm) {
    delete elm[del_key];
    if(Array.isArray(elm)) {
      elm.forEach(function(sub_elm) {
        removeProp(del_key, sub_elm);
      });
    } else if(typeof elm === 'object') {
      Object.keys(elm).forEach(function(key) {
        if(key !== '__parentArray') {
          if(Array.isArray(elm[key])) {
            elm[key].forEach(function(sub_elm) {
              removeProp(del_key, sub_elm);
            });
          } else if(typeof elm[key] === 'object') {
            removeProp(del_key, elm[key]);
          }
        }
      });
    }
  }
};

module.exports = removePropertyObject;
