'use strict';

const generateHTML = (function () {

  const createHTML = function (bookmark) {
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

  return {
    createHTML,
  };
}());