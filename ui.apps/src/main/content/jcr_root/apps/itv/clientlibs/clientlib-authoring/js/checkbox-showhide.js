(function(document, $) {
    "use strict";

    $(document).on("foundation-contentloaded", function(e) {
        $(".cq-dialog-checkbox-showhide", e.target).each(function(i, element) {
            Coral.commons.ready(element, function(checkbox) {
                toggleVisibility(checkbox);
                $(checkbox).on("change", function() {
                    toggleVisibility(checkbox);
                });
            });
        });
    });

    function toggleVisibility(checkbox) {
        var targetSelector = $(checkbox).data("cqDialogCheckboxShowhideTarget");
        if (targetSelector) {
            var isChecked = checkbox.checked;
            $(targetSelector).each(function() {
                var targetValue = String($(this).data("showhidetargetvalue"));
                if ((isChecked && targetValue === "true") || (!isChecked && targetValue === "false")) {
                    $(this).removeClass("hide");
                } else {
                    $(this).addClass("hide");
                }
            });
        }
    }
})(document, Granite.$);