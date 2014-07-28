$(document).ready(function () {
    $("div.clickable").on("click", function () {
        var service = this.getAttribute("data-service");
        var sub_service = this.getAttribute("data-subService");
        $("#subServices").addClass("hidden");
        $("#contactForm").removeClass("hidden");
        document.getElementById("interest").innerHTML = sub_service;
    });

    $("a#nxtBtn").on("click", function () {
        var service = this.getAttribute("data-service");
        var sub_service = document.getElementById("otherInterests").value;
        $("#subServices").addClass("hidden");
        $("#contactForm").removeClass("hidden");
        document.getElementById("interest").innerHTML = sub_service;
    });
});