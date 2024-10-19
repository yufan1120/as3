document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link'); // 取得所有 nav 連結

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // 防止預設行為

          const targetId = this.getAttribute('href'); // 取得目標區塊的 id
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              // 計算目標區塊的垂直位置
              const targetPosition = targetElement.offsetTop;
              const offset = window.innerHeight * 0.85; // 偏移量為 85vh

              // 自訂滾動動畫
              window.scrollTo({
                  top: targetPosition + offset, // 滾動到目標位置加上偏移
                  behavior: 'smooth' // 平滑滾動
              });
          }
      });
  });
});

var winw = $(window).width();
var winh = $(window).height();
var doch = $(document).height();

$(window).scroll(function(){
  var current_pos = $(window).scrollTop();
  var new_width = (current_pos * winw) / (doch - winh);
  $("#statusbar").css({
    width: new_width
  });
});