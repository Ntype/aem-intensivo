(function (document) {
  "use strict";

    function initImgDBLClick() {
        var images = document.querySelectorAll(".js-image");

        if (!images || images.length === 0) {
        return;
        }

        images.forEach(function (el) {
            el.addEventListener("dblclick" , function(){
                el.classList.toggle("cmp-superimage--greyscale")
            });
        });
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initImgDBLClick);
    } else {
      initImgDBLClick();
    }
})(document);