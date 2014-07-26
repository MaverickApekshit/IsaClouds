$(document).ready(function () {
    $("div.clickable").on("click", function () {
        var service = this.getAttribute("data-serviceMessage");
        var next = $(this).data('value');
        $("#app").children("div").addClass("hidden");
        $("#" + next).removeClass("hidden");
        $(document).scrollTo("#" + next);
    });
});