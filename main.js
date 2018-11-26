$(document).ready( () => {

    $("#collapseBtn").on("click", () => {
        $("#menuBox").fadeIn(350);
    });

    $('#closeBut').on("click", () => {
        $('#menuBox').fadeOut(350);
    });

    $('.menuLinkMobile').on('click', () => {
        $('#menuBox').fadeOut(350);
    });

    if ($(window).width() < 1280) {
        $('.fa-search').on('click', () => {
            $('#inputSearch').slideToggle(350);
        });
    }


});