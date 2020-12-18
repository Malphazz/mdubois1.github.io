
$(function() {
    $("body").css("backround","#202020")
    $("p").hide();
    $("#gif").hide();

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
    })

});