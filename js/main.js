var item = $(".menu-item");
var itemSubLink = $(".sub-menu a");
var tab = $(".tab");
var section = $(".notice, .pds");


//메인메뉴의 하위 메뉴 제어를 위한 스크립트
item.on('mouseover focusin', function () {

    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});


itemSubLink.attr('class', 'icon-dot-circled');

item.attr("tabindex", '0');

//탭 콘텐츠 제어를 위한 스크립트

/*tab.on("click", function () {
    section.removeClass("board-act");
    $(this).parent().addClass("board-act");
})*/

tab.on("click keyup", function (e) {
    e.preventDefault();
    if (e.keyCode === 13 || e.type==='click'|| e.keyCode===32) {
        section.removeClass("board-act");
        $(this).parent().addClass("board-act");
    }

})