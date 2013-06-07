(function($) {

    $( document ).ready(function() {
    
        $("nav ul li a").click(function(event) {
            
            event.preventDefault();
            
            $("nav ul li.active").toggleClass("active");
            $(this).parent().toggleClass("active");            
            
            $(".content.active").toggle().toggleClass("active");
            $($(this).attr("href")).toggle().toggleClass("active");
            
        });
        
    });
    
})(jQuery);
