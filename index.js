/*
 * STORE: title, link, description, rating (1-5), expanded(default:false)
 * Display initially in condensed view - show only title & rating
 * Click on bookmark to edit rating and  & visit link
 * Delete bookmark
 * Filter by rating via dropdown menu
 * BASE_URL: https://thinkful-list-api.herokuapp.com
 *  Endpoints: 
 *    /bookmarks
 */
'use strict';
//DOM READY
/* global bookmarkList */

$(document).ready(function() {
  bookmarkList.bindEventListeners();
  api.getItems(items => {
    items.forEach((item => {
      store.addBookmark(item);
      bookmarkList.render();
    }));
  });
});