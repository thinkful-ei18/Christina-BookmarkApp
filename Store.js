// * STORE: title, link, description, rating (1-5), expanded(default:false)
'use strict';

const store = (function () {
  const bookmarks = [];

  const filterRating = '';

  const addingBookmark = false;

  const addBookmark = function(bookmark) {
    //recieve bookmark object
    //add bookmark to store
    this.bookmarks.push(bookmark);
    console.log(bookmark);
  };

  const findById = function (id) {
    //find bookmark by id
  };

  const findAndDelete = function (id) {
    //find bookmark by id (findById)
    //delete bookmark from store
    
  };

  const findAndUpdate = function (id, newData) {
    //find id (findById)
    //update bookmark with newData
  };

  return {
    bookmarks,
    addBookmark,
    findById,
    findAndDelete,
    findAndUpdate,
    filterRating,
  };
}());