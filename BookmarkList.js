//handle clicks
//generate HTML
//bookmark functions
/* global store, api */
'use strict'; 

const bookmarkList = (function () {
  const generateHTML = function (bookmark) {
    //generate HTML of bookmark from bookmark object passed by bookmarkFromStore
    //find if object is expanded and generate correct HTML
    let expandedHTML = '';
    let unExpandedHTML = `<img src = 'https://d30y9cdsu7xlg0.cloudfront.net/png/1241426-200.png' class = 'click-to-expand'></img>`;
    if (bookmark.expanded === true) {
      expandedHTML =
        `<span>${bookmark.desc}</span>
        <a href = ${bookmark.url} target="_blank" >Visit ${bookmark.title}</a>
        <img src = 'http://www.pvhc.net/img52/egmihvcuynqnfibvzatu.png' class = 'click-to-collapse'></img>`;
      unExpandedHTML = '';
    }
  return `
    <li class = 'js-bookmark-element' data-bookmark-id ='${bookmark.id}'>
    <span>${bookmark.title}</span>
    <span>${bookmark.rating}</span>
    ${unExpandedHTML}
    ${expandedHTML}
    <button type = 'button' id = 'js-button-delete'>Delete bookmark</button>
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
    $('.bookmark-list').on('click', '.click-to-expand', (event => {
      const id = getIdFromElement(event.target);
      store.findById(id).expanded = true;
      render();
    }));
  };

  const handleBookmarkCollapse = function () {
    $('.bookmark-list').on('click', '.click-to-collapse', (event => {
      const id = getIdFromElement(event.target);
      store.findById(id).expanded = false;
      render();
    }));
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
      //$(event.target).closest('div').toggleClass('hidden');
      toggleAddButtonHide();
        }));
  };

  const handleNewBookmarkMake = function () {
    //get info from form
    $('.new-bookmark-form').submit(event => {
      event.preventDefault();
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
      console.log('should unhide now');
      toggleAddButtonHide();
      handleClearNewBookmarkForm();
    });
  };

  const toggleAddButtonHide = function () {
    //when form open hide
    //form submit unhide
    $('#new-bookmark-add-form').toggleClass('hidden');
    console.log('toggle hidden on button');
  };

  const handleClearNewBookmarkForm = function () {
    console.log('clearing fields');
    const nameField = $('.js-bookmark-title');
    const descriptionField = $('.js-bookmark-description');
    const linkField = $('.js-bookmark-link');
    const ratingField = $('.js-bookmark-rating');
    nameField.val('');
    descriptionField.val('');
    linkField.val('');
    ratingField.val('');
  };

  const handleNewBookmarkCancel = function () {
    $('#cancel-submit').click(event => {
      event.preventDefault();
      $(event.target).closest('.container').find('.new-bookmark-form').toggleClass('hidden');
      toggleAddButtonHide();
    });
  };


  const editBookmarkClick = function () {
    //listen for update bookmark data
    //update bookmark on server + callback:update bookmark on store
    //render
  };

  const handleBookmarkDelete = function () {
    //listen for click on delete
    //update on server + store on callback
    //render
    $('.js-bookmark-list').on('click', '#js-button-delete', (event => {
      const bookmarkId = getIdFromElement(event.target);
      api.deleteItem(bookmarkId, (item => {
        store.deleteItem(bookmarkId);
        render();
      }));
  }));
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
    return $(item).closest('.js-bookmark-element').data('bookmark-id');
  };

  const bindEventListeners = function() {
    //invoke all event listeners
    handleNewBookmarkMake(),
    handleNewBookmarkClick();
    handleNewBookmarkCancel();
    handleBookmarkExpand();
    handleBookmarkCollapse();
    handleBookmarkDelete();
    console.log('hello');
  };

  return {
    bindEventListeners,
    render,
  };

}());