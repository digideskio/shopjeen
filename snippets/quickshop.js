$(function() {
  
  if ($(window).width() >= 959) {
    $('.collection-image').hover(function(){ $(this).children('.quick_shop').show(); }, function(){ $(this).children('.quick_shop').hide(); })
    $(".quick_shop").leanModal();

    $('#feature_image a').click(function() {
      $.fancybox.open($(".fancybox"), {"padding": 0, "nextEffect": "fade", "prevEffect": "fade", "index": $(this).data('index')});
      return false;     
    });
  }
  
  $('.thumbnails a').click(function(e) { 
    if ($(window).width() >= 767) { 
      if ($('#feature_image a').data('index') != $(this).data('index')) {
        var optionValue = $(this).children('img').attr('alt');
        $('#feature_image a').attr('href', $(this).attr('href')).data('index', $(this).data('index')); 
        $('#feature_image img').attr('src', $(this).children('img').attr('src')); 
        $('select.single-option-selector:contains(' + optionValue + ')').val(optionValue).trigger('change');
      }
      e.stopPropagation();
      return false;
    } 
  });
  $('#tag_filter').change(function() { window.location = $('#tag_filter option:selected').val(); });  
  $('#category_filter').change(function() { window.location = $('#category_filter option:selected').val(); });
  $('.update_subtotal').click(function() { $("#cart_form").submit(); return false; });
  $("#cart_form input[type='number']").change(function() {$("#cart_form").submit(); });
  
    var tabs = $('ul.tabs');
	tabs.each(function(i) {
		var tab = $(this).find('> li > a');
		tab.click(function(e) {
			var contentLocation = $(this).attr('href');
			if(contentLocation.charAt(0)=="#") {
				e.preventDefault();
				tab.removeClass('active');
				$(this).addClass('active');
				$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
			}
		});
	});
	