$(document).ready(
    function () {

        $("#btnHide").click(
            function () {
                $("#targetBox").hide();
            }
        );
        $("#btnShow").click(
            function () {
                $("#targetBox").show("slow");
            }
        );
        $("#btnFadeOut").click(
            function () {
                $("#targetBox").fadeOut();
            }
        );
        $("#btnFadeIn").click(
            function () {
                $("#targetBox").fadeIn();
            }
        );
        $("#btnSlideUp").click(
            function () {
                $("#targetBox").slideUp();
            }
        );
        $("#btnSlideDown").click(
            function () {
                $("#targetBox").slideDown();
            }
        );
        $("#btnToggle").click(
            function () {
                $("#targetBox").slideToggle();
            }
        );
    }
)