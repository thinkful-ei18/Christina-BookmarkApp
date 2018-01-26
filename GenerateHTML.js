'use strict';

const generateHTML = (function () {

  const createHTML = function (bookmark) {
    //generate HTML of bookmark from bookmark object passed by bookmarkFromStore
    //find if object is expanded and generate correct HTML
    let stars = bookmark.rating;
    console.log(stars);
    let currentStars;
    
    // I know this is horrible code, but I just want the pretty stars to work :/
    if (stars === 1) {
      currentStars = 20;
    } else if (stars === 2) {
      currentStars = 40;
    } else if (stars === 3) {
      currentStars = 60;
    } else if (stars === 4) {
      currentStars = 80;
    } else {
      currentStars = 100;
    }
    

    console.log(currentStars);
    

    let expandedHTML = '';
    
    if (bookmark.expanded === true) {
    expandedHTML =
        `<h3>${bookmark.desc}</h3>
        <a href = ${bookmark.url} target="_blank" >Visit ${bookmark.title}</a>`;
    }
    console.log(bookmark.expanded);

  return `
    <div class = 'col s12 m4 13'>
      <div class = 'card'>
      <li class = 'bookmark-item js-bookmark-element' data-bookmark-id ='${bookmark.id}'>
        <div class = 'card-image'>
          <div class = 'hue' style="background-color:${bookmark.hue};"></div>
            <span class = 'card-title'>${bookmark.title}
            <p></p>
            <div class = 'stars-outer'>
          <div class = 'stars-inner' style = 'width:${currentStars}%'>
          </div>
        </div></span>
            <div class = '${bookmark.expanded ? 'click-to-collapse' : 'click-to-expand'}'>
            <a class = 'btn-floating halfway-fab red'><i class = 'material-icons'>${bookmark.expanded ? 'keyboard_arrow_up' : 'add'}</i></a>
            </a>
            </div>
        </div>
        <div class = 'card-content'>
        
          <p class = 'hidden'>${bookmark.rating} Stars</p>
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