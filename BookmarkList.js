//handle clicks
//generate HTML
//bookmark functions
/* global store, api */
'use strict'; 

const bookmarkList = (function () {
  const generateHTML = function (bookmark) {
    //generate HTML of bookmark from bookmark object passed by bookmarkFromStore
    //find if object is expanded and generate correct HTML
  return `
    <li class = 'js-bookmark-element bookmarkID = '${bookmark.id}'>
    <span>${bookmark.title}</span>
    <span>${bookmark.desc}</span>
    <a href = ${bookmark.url} target="_blank" >Visit ${bookmark.title}</a>
    <span>${bookmark.rating}</span>
    </li>`;
  };

  const generateBookmarkString = function (bookmarkList) {
    //grab bookmarks from store from (render())
    //join HTML returned from generateHTML + give to render
    const bookmarks = bookmarkList.map((bookmark => generateHTML(bookmark)));
    return bookmarks.join('');
  };

  const handleBookmarkExpand = function () {
    //listen on click on bookmark
    //change store.expanded = true
    //change html to expanded state
    //render
  };

  const handleNewBookmarkClick = function () {
    //listen for newBookmark input
    //Change addingBookmark to true
    //add bookmark to server + callback:add bookmark to store
      //render
    //change addingBookmark to false
    $('#new-bookmark-add-form').click((event => {
      console.log('hide or unhide!');
      $(event.target).closest('.container').find('.new-bookmark-form').toggleClass('hidden');
    }));
  };

  const handleNewBookmarkMake = function () {
    //get info from form
    $('.new-bookmark-form').submit(event => {
      event.preventDefault();
      //const currentTarget = $(event.currentTarget);
      const bookmarkName = $('.js-bookmark-title').val();
      const bookmarkDescription = $('.js-bookmark-description').val();
      const bookmarkLink = $('.js-bookmark-link').val();
      const bookmarkRating = $('.js-bookmark-rating').val();
      api.addItem(bookmarkName, bookmarkDescription, bookmarkLink, bookmarkRating, (newItem => {
        store.addBookmark(newItem);
        console.log('item added to store');
        render();
      }));
      $(event.currentTarget).toggleClass('hidden');
      //handleClearNewBookmarkForm();
    });
  };

  // const handleClearNewBookmarkForm = function () {
  //   const nameField = $('js-bookmark-title');
  //   nameField.val('');
  // };

  // const handleNewBookmarkCancel = function () {
  //   $('#cancel-submit').click(event => {
  //     event.preventDefault();
  //     $(event.target).closest('.container').find('.new-bookmark-form').toggleClass('hidden');
  //   });
  // };

  const editBookmarkClick = function () {
    //listen for update bookmark data
    //update bookmark on server + callback:update bookmark on store
    //render
  };

  const handleToggleFilter = function () {
    //if filter is off turn on - etc
  };

  const handleFilterRatingClick = function () {
    //grab ratingValue from DOM
    //set store.filterRating

  };

  const render = function () {
    //filter by store.filterRating
    //grab HTML from generateBookmarkString set .html =
    //check if addingBookmark is true
    const bookmarkHTML = generateBookmarkString(store.bookmarks);
    $('.js-bookmark-list').html(bookmarkHTML);
  };

  const getIdFromElement = function (item) {
    //get id from closest item
  };

  const bindEventListeners = function() {
    //invoke all event listeners
    handleNewBookmarkMake(),
    handleNewBookmarkClick();
    //handleNewBookmarkCancel();
    console.log('hello');
  };

  return {
    bindEventListeners,
    render,
  };

}());