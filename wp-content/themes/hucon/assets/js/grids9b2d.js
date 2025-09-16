//Grid for image Gallery
function initImageGrid() {
  var $grid = $('.image-gallery-grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });
}


//Grid for Blog Template
function initBlogGrid() {
  var $grid = $('.blog-grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });
}
