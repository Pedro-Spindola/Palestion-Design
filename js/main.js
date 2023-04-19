$(function(){

});

$(function() {
    $('.mod_single1').click(function() {
      $(this).next('.mod_single2').slideToggle();
      $(this).toggleClass("aberto");
      $('.mod_single2').not($(this).next('.mod_single2')).slideUp();
      $('.mod_single1').not($(this)).removeClass("aberto");
    });
  });
  $(function(){
    if($(window).width() > 768) {
      $('.titulo').hover(function(){
        $(this).next('.temas').css('display', 'block');
        $('.temas').not($(this).next('.temas')).css('display', 'none');
      });
      $('.titulo').mouseleave(function(){
        $('.temas').css('display', 'none');
      });
    }
  });
  
  