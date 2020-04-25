$(document).ready(function(){
    $('#ageWrapper').prependTo($('body'));

    if (($.cookie('age')) !== 'true') { $('#ageWrapper').addClass('ageConfirmed'); }

    $('#ageOkay').click(function() {
      $.cookie('age', 'true', { expires: 1440, path: '/' });
      $('#ageWrapper').removeClass('ageUnknown');
    });
 
    $('#ageBad').click(function() {
      window.location.href='https://www.felixvestra.com';
    });
  });