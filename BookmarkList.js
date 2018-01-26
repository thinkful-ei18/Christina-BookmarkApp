//handle clicks
//generate HTML
//bookmark functions
/* global store, api, generateHTML */
'use strict'; 

const bookmarkList = (function () {
  

  const generateBookmarkString = function (bookmarkList) {
    //grab bookmarks from store from (render())
    //join HTML returned from generateHTML + give to render
    const bookmarks = bookmarkList.map((bookmark => generateHTML.createHTML(bookmark)));
    return bookmarks.join('');
  };

  const handleBookmarkExpand = function () {
    //listen on click on bookmark
    //change store.expanded = true
    //change html to expanded state
    //render
    $('.bookmark-list').on('click', '.click-to-expand', (event => {
      const id = getIdFromElement(event.target);
      console.log('expanding!');
      store.findById(id).expanded = true;
      render();
    }));
  };

  const handleBookmarkCollapse = function () {
    $('.bookmark-list').on('click', '.click-to-collapse', (event => {
      console.log('collapsing!');
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
      store.creatingBookmark = true;
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
      console.log(bookmarkRating);
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
    if (store.creatingBookmark === true) {
      $('#new-bookmark-add-form').toggleClass('hidden');
      console.log(store.creatingBookmark);
    }
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

  // const handleToggleFilter = function () {
  //   //if filter is off turn on - etc
  //   $('.js-filter-button').click((event => {
  //     store.filterRating = '';
  //     $('#js-rating-dropdown').val('');
  //     console.log('should be empty ' + store.filterRating);
  //     render();
  //   }));
  // };

  const handleFilterRatingClick = function () {
    //grab ratingValue from DOM
    //set store.filterRating
    $('#js-rating-dropdown').change((event => {
      const filterValue = ($('#js-rating-dropdown').val());
      store.filterRating = filterValue;
      console.log(store.filterRating);
      render();
    }));

  };

  const editBookmarkClick = function () {
    //listen for update bookmark data
    //update bookmark on server + callback:update bookmark on store
    //render
  };

  const render = function () {
    //filter by store.filterRating
    //grab HTML from generateBookmarkString set .html =
    //check if addingBookmark is true

    let renderThese = store.bookmarks;

    if (store.filterRating !== '') {
      renderThese = store.bookmarks.filter(item => {
        console.log('filtering!');
        console.log(item.rating);
        return item.rating >= store.filterRating;
      });
    }

    const bookmarkHTML = generateBookmarkString(renderThese);
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
    handleFilterRatingClick();
    //handleToggleFilter();
    console.log('hello');
  };

  return {
    bindEventListeners,
    render,
  };

}());