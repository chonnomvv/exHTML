var item = $(".menu-item");
var itemSubLink = $(".sub-menu a");
var tab = $(".tab");
var section = $(".notice, .pds");
var related_li = $(".related-list li");
var list = $(".related-list");

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
//관련 사이트 목록 제어를 위한 스크립트

list.on("mouseover focusin", function(){
    $(this).addClass("list-act");
})

list.on("mouseout focusout", function(){
    $(this).removeClass("list-act");
})

/*

related_li.on("focusin",function(){
    $(".related-list").addClass("list-act");

    related_li.on("focusout", function(){
        $(".related-list").removeClass("list-act");
    })
})
*/

