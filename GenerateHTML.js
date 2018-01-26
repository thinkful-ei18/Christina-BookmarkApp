'use strict';

const generateHTML = (function () {

  const createHTML = function (bookmark) {
    //generate HTML of bookmark from bookmark object passed by bookmarkFromStore
    //find if object is expanded and generate correct HTML
    let expandedHTML = '';
    let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    if (bookmark.expanded === true) {
    expandedHTML =
        `<h3>${bookmark.desc}</h3>
        <a href = ${bookmark.url} target="_blank" >Visit ${bookmark.title}</a>`;
    }
    console.log(bookmark.expanded);

  return `
    <div class = 'col s12 m6 13'>
      <div class = 'card'>
      <li class = 'bookmark-item js-bookmark-element' data-bookmark-id ='${bookmark.id}'>
        <div class = 'card-image'>
          <div class = 'hue' style="background-color:${hue};"></div>
            <span class = 'card-title'>${bookmark.title}</span>
            <div class = '${bookmark.expanded ? 'click-to-collapse' : 'click-to-expand'}'>
            <a class = 'btn-floating halfway-fab red'><i class = 'material-icons'>${bookmark.expanded ? 'keyboard_arrow_up' : 'add'}</i></a>
            </a>
            </div>
        </div>
        <div class = 'card-content'>
          <p>${bookmark.rating} Stars</p>
          ${expandedHTML}
          <a class="waves-effect waves-teal btn-flat right" id = 'js-button-delete'>Delete</a>
        </div>
      </div>
    </div>
    </li>`;
  };

  return {
    createHTML,
  };
}());