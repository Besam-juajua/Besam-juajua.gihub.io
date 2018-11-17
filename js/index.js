$(document).ready(function(){

  // 被点击的导航改变样式
  $('#header #navigation a').click(function(){
    for(let nav of $('#header #navigation a')){
      nav.className = '';
    }
    this.className = 'nav-active';
  });

  // 首页的透明‘动态卡片’
  // let banner = $('.main-desc')[0];
  // banner.onmousemove = function(e){
  //   $(this).css({transition : ''});

    // ‘动态卡片’中心点到页面左边距离,加上document.body.clientWidth*0.2,是左边header的宽度
    // let centerX = this.offsetLeft + (document.body.clientWidth*0.2) + this.offsetWidth / 2,
    //     centerY = this.offsetTop + this.offsetHeight / 2;
    // 鼠标偏差中心点的距离
    // let deltaX = e.pageX - centerX,
    //     deltaY = e.pageY - centerY;
    // 向左或向右的 偏差率
    // let percentageX = deltaX / centerX,
    //     percentageY = deltaY / centerY;
    // 控制偏差的程度
  //   let deg = 20;  

  //   $(this).css({transform : 'scale(1.03) rotateX(' + (-percentageY * deg) + 'deg)'+'rotateY(' + (-percentageX * deg) + 'deg) translateZ(30px)'});
  // };
  // banner.onmouseleave = function(e){
  //   $(this).css({transform : 'rotateX(0) rotateY(0) translateZ(0px)'});
  //   $(this).css({transition : 'all 0.2s linear'});
  // };
  var mouse = { X: 0      , Y: 0      , CX: 0       , CY: 0 },
      block = { X: mouse.X, Y: mouse.Y, CX: mouse.CX, CY: mouse.CY };
  // 鼠标偏差中心点的距离
  $('.main-desc').on('mousemove', function(e) {
    mouse.X = (e.pageX - $(this).offset().left) - $('.main-desc').width() / 2;
    mouse.Y = (e.pageY - $(this).offset().top) - $('.main-desc').height() / 2;
  });
  // 鼠标离开，‘动态卡片’复原位置
  $('.main-desc').on('mouseleave', function(e) {
    mouse.X = mouse.CX;
    mouse.Y = mouse.CY;
  });
  // 定时器，每0.02s,响应一次鼠标的位置
  setInterval(function() {
    block.CY += (mouse.Y - block.CY) / 12;
    block.CX += (mouse.X - block.CX) / 12;
    // 放大旋转
    $('.main-desc').css({
      transform: 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
    })
  }, 20);

})