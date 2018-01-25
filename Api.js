//Server functionality
/* global cuid */
'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/christina2';

  const getItems = function (callback) {
    //get items from server with ajax GET
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  const addItem = function (title, desc, url, rating, callback) {
    //get new item data
    //add data to server using ajax POST
    const newBookmark = JSON.stringify ( {
      desc,
      title,
      url,
      rating,
      id : cuid(),
    });
    $.ajax ({
      url : `${BASE_URL}/bookmarks`,
      method : 'POST',
      contentType : 'application/json',
      data : newBookmark,
      success : callback
    });
  };

  const updateItem = function (id, newData, callback) {
    //find item on server with id
    //update data of item with ajax PATCH
  };

  const deleteItem = function (id, callback) {
    //get item by id
    //delete item from server
  };

  return {
    getItems,
    addItem,
    updateItem,
    deleteItem,
  }
}());