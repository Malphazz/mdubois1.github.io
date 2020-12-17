$(function() {

    $("p").hide();
    $("#gif").hide();
    $("#gif1").hide();
    $("#gif2").hide();
    $("body").css("background"; "white")

    $("h1").on( "click", function() {
        $("p:first").show();
    })

    $("p:first").on( "click", function() {
        $("p:eq(1)").show();
    })

    $("p:eq(1)").on( "click", function() {
        $("p:eq(2)").show();
    })

    $("p:eq(2)").on( "click", function() {
        $("#gif").show();
        $("#gif1").show()
        $("#gif2").show()
    })

});