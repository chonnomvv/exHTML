var btn_lang = $(".btn_lang");
var list_lang = $(".language-list");
var body = document.body;
var submenu = $(".submenu-pr");
var submenu_title = $(".sub-title");
var submenu_menu = $(".submenu-pr>ul");

submenu.on('mouseover focusin', function (e) {
    var target = $(e.target);
    var menu_height = $(this).children('.menu-submenu').height();
    menu_height = menu_height + 40;
    $(".menu-submenu").css('display', 'none');
    $(".menu-bg").css('display', 'block');
    $(".menu-bg").css('height', menu_height);
    $(this).children('.menu-submenu').css('display', 'flex');
});

submenu.on('mouseout', function (e) {
    // $(".menu-bg").on('mouseleave', function (e) {
        $(".menu-submenu").css('display', 'none');
        $(".menu-bg").css('display', 'none');
    // })
})


/* 언어 선택 버튼 클릭 동작*/
btn_lang.on("click", function (e) {
    e.preventDefault();
    list_lang.removeClass('hidden-box');
});

$('body').on('click', function (e) {
    var target = $(e.target);
    if (!target.hasClass("btn_lang") && !list_lang.hasClass('hidden-box')) {
        console.log("hello");
        list_lang.addClass('hidden-box');
    }
});

