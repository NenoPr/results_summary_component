jQuery.noConflict();
jQuery(document).ready(function ($) {
  $.getJSON("data.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
      $(".summary-contents-container").append(
        `<div class="card card-${val.category.toLowerCase()}-container">
                <img
                    src="${val.icon}"
                    alt="${val.category.toLowerCase()}-svg"
                    class="card-icon card-${val.category.toLowerCase()}-icon"
                />
                <div class="card-text card-${val.category.toLowerCase()}-text">${
          val.category
        }</div>
              <div class="card-score-container">
                <div class="card-score card-score-${val.category.toLowerCase()}">${
          val.score
        }</div>
                <div class="card-separator">/</div>
                <div class="card-full-score">100</div>
              </div>
            </div>
              `
      );
    });
  });
});
