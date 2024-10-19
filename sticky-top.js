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