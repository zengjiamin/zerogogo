var mySwiper = new Swiper('#case1', {
  autoplay: true, //可选选项，自动滑动
  initialSlide: 0, //默认显示第二张图片索引从0开始
  speed: 700, //设置过度时间
  loop: true,
  /* grabCursor: true,//鼠标样式根据浏览器不同而定 */
  autoplay: {
      delay: 1000
  },
  /*  设置每隔3000毫秒切换 */
//  分页器
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
//  导航按钮 上一页下一页
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // 滚动条 
  scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
  },
  /*  设置当鼠标移入图片时是否停止轮播*/
  autoplay: {
      disableOnInteraction: false,
  },
});