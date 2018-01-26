// * STORE: title, link, description, rating (1-5), expanded(default:false)
'use strict';

const store = (function () {
  const bookmarks = [];

  const filterRating = '';

  const creatingBookmark = false;

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
    const index = this.bookmarks.findIndex((item => item.id === id));
    this.bookmarks.splice(index, 1);
  };

  const updateItem = function (id, newData) {
    //find id (findById)
    //update bookmark with newData
  };

  return {
    bookmarks,
    addBookmark,
    findById,
    deleteItem,
    updateItem,
    filterRating,
    creatingBookmark,
  };
}());