
// 简历分页
(function (p, t, e, a) { "use strict"; var s = { page: 1, pageSize: 10, total: 0, showTotal: false, totalTxt: "共{total}条", noData: false, showSkip: false, showPN: true, prevPage: "上一页", nextPage: "下一页", fastForward: 0, backFun: function (t) { } }; function i(t, e) { this.element = p(t); this.settings = p.extend({}, s, e); this.pageNum = 1, this.pageList = [], this.pageTatol = 0; this.init() } p.extend(i.prototype, { init: function () { this.element.empty(); this.viewHtml() }, creatHtml: function (t) { t == this.settings.page ? this.pageList.push('<button class="active" data-page=' + t + ">" + t + "</button>") : this.pageList.push("<button data-page=" + t + ">" + t + "</button>") }, viewHtml: function () { var t = this.settings; var e = 0; var a = []; if (t.total > 0) { e = Math.ceil(t.total / t.pageSize) } else { if (t.noData) { e = 1; t.page = 1; t.total = 0 } else { return } } this.pageTatol = e; this.pageNum = t.page; if (t.showTotal) { a.push('<div class="spage-total">' + t.totalTxt.replace(/\{(\w+)\}/gi, t.total) + "</div>") } a.push('<div class="spage-number">'); this.pageList = []; if (t.showPN) { t.page == 1 ? this.pageList.push('<button class="button-disabled" data-page="prev">' + t.prevPage + "</button>") : this.pageList.push('<button data-page="prev">' + t.prevPage + "</button>") } if (e <= 6) { for (var s = 1; s < e + 1; s++){ this.creatHtml(s) } } else { if (t.page < 5) { for (var s = 1; s <= 5; s++){ this.creatHtml(s) } this.pageList.push('<button data-page="after" class="spage-after">...</button><button data-page=' + e + ">" + e + "</button>") } else if (t.page > e - 4) { this.pageList.push('<button data-page="1">1</button><button data-page="before" class="spage-before">...</button>'); for (var s = e - 4; s <= e; s++){ this.creatHtml(s) } } else { this.pageList.push('<button data-page="1">1</button><button data-page="before" class="spage-before">...</button>'); for (var s = t.page - 2; s <= Number(t.page) + 2; s++){ this.creatHtml(s) } this.pageList.push('<button data-page="after" class="spage-after">...</button><button data-page=' + e + ">" + e + "</button>") } } if (t.showPN) { t.page == e ? this.pageList.push('<button class="button-disabled" data-page="next">' + t.nextPage + "</button>") : this.pageList.push('<button data-page="next">' + t.nextPage + "</button>") } a.push(this.pageList.join("")); a.push("</div>"); if (t.showSkip) { a.push('<div class="spage-skip">跳至&nbsp;<input type="text" value="' + t.page + '"/>&nbsp;页&nbsp;&nbsp;<button data-page="go">确定</button></div>') } this.element.html(a.join("")); this.clickBtn() }, clickBtn: function () { var a = this; var s = this.settings; var i = this.element; var n = this.pageTatol; this.element.off("click", "button"); this.element.on("click", "button", function () { var t = p(this).data("page"); switch (t) { case "prev": s.page = s.page - 1 >= 1 ? s.page - 1 : 1; t = s.page; break; case "next": s.page = Number(s.page) + 1 <= n ? Number(s.page) + 1 : n; t = s.page; break; case "before": s.page = s.page - s.fastForward >= 1 ? s.page - s.fastForward : 1; t = s.page; break; case "after": s.page = Number(s.page) + Number(s.fastForward) <= n ? Number(s.page) + Number(s.fastForward) : n; t = s.page; break; case "go": var e = parseInt(i.find("input").val()); if (/^[0-9]*$/.test(e) && e >= 1 && e <= n) { s.page = e; t = e } else { return } break; default: s.page = t }if (t == a.pageNum) { return } a.pageNum = s.page; a.viewHtml(); s.backFun(t) }); this.element.off("keyup", "input"); this.element.on("keyup", "input", function (t) { if (t.keyCode == 13) { var e = parseInt(i.find("input").val()); if (/^[0-9]*$/.test(e) && e >= 1 && e <= n && e != a.pageNum) { s.page = e; a.pageNum = e; a.viewHtml(); s.backFun(e) } else { return } } }); if (s.fastForward > 0) { i.find(".spage-after").hover(function () { p(this).html("&raquo;") }, function () { p(this).html("...") }); i.find(".spage-before").hover(function () { p(this).html("&laquo;") }, function () { p(this).html("...") }) } } }); p.fn.sPage = function (t) { return this.each(function () { new i(this, t) }) } })(jQuery, window, document);
$(function(){
    // 示例3
    $("#pagination").sPage({
        page:1,
        pageSize:3,
        total:6,
        showPN:false,
        backFun:function(page){
            // $("#pNum2").text(page);
        }
    });
});


// pageswitch配置（分页效果）
$(function () {
    $("#container").switchPage({
        // 'container': '#container',
        // 'sections': '.section',
        'pagination': false,
		'loop' : false,
        'easing': 'ease',
        'duration': '500',
		'keyboard' : true,
        'direction': 'vertical'
	});
});



$('.toggle-nav').on('click', function () {
    $('.nav-btn .icon').toggleClass('icon-menu').toggleClass('icon-close')
    $('.mask').toggleClass('hide')
    $('.slide-nav').toggleClass('active')
    navShow = !navShow;
})

var pageBlock = false;
$('.page-btn button').on('click', function () { 
    if (pageBlock) return;
    pageBlock = true;
    var page = $(this).data('page');
    $('.page-btn button').removeClass('active');
    $(this).addClass('active');
    $('.worker .worker-page').removeClass('show');
    $($('.worker .worker-page')[page - 1]).addClass('show');
    setTimeout(function () { 
        $('.worker .worker-page').removeClass('left');
        $($('.worker .worker-page')[page - 1]).addClass('left');
        // bindPageButton();
        pageBlock = false;
    }, 1400)
})



