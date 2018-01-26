// * STORE: title, link, description, rating (1-5), expanded(default:false)
'use strict';

const store = (function () {
  const bookmarks = [];

  const filterRating = '';

  const addingBookmark = false;

  const addBookmark = function (bookmark) {
    //recieve bookmark object
    //add bookmark to store
    bookmark.expanded = false;
    this.bookmarks.push(bookmark);
  };

  const findById = function (id) {
    //find bookmark by id
    return this.bookmarks.find(item => item.id === id);
  };

  const deleteItem = function (id) {
    //delete bookmark from store
    this.bookmarks.splice(id, 1);
  };

  const findAndUpdate = function (id, newData) {
    //find id (findById)
    //update bookmark with newData
  };

  return {
    bookmarks,
    addBookmark,
    findById,
    deleteItem,
    findAndUpdate,
    filterRating,
  };
}());