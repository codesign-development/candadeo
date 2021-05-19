$(".lan-select").click(function() {

    chunkDataForLMS = `lan=${this.id}?`

    $(".lan-select").removeClass("selected");
    $(this).addClass("selected");
    $(".elige-txt").addClass("animate__animated");
    $(".elige-txt").addClass("animate__fadeOut");
});

$(".lan-select").click(function() {

    if ($("#select-language").hasClass("selected")) {
        $(".selected").removeClass("lan-hide");
        $(".selected").addClass("animate__animated");
        $(".selected").addClass("animate__fadeInUp");
    } else {
        $("#select-language").addClass("animate__animated");
        $("#select-language").addClass("animate__fadeInDown");
        $("#select-language").addClass("lan-hide");
    }
});

$("#lan-btn").click(function() {

    $("#content-lan").addClass("animate__animated");
    $("#content-lan").addClass("animate__fadeOut");
    $("#content-lan").addClass("cont-hide");
    $("#content-welcome").removeClass("cont-hide");
    $("#content-welcome").addClass("animate__animated");
    $("#content-welcome").addClass("animate__fadeIn");
    $("#derArrow").removeClass("noVes");
    $("#derArrow").addClass("siVes");

    $("#textTitle").css("display", "block");
    $("#textTitle").addClass("animate__animated");
    $("#textTitle").addClass("animate__backInDown");
});