var $j = jQuery.noConflict();
// $j is now an alias to the jQuery function; creating the new alias is optional. 

$j(window).load(function() {
    
       $j('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });
		
		  $j('#popupBoxEnter').click( function() {            
            unloadPopupBox();
        });
		
		
        $j('#container').click( function() {
            unloadPopupBox();
        });

        function unloadPopupBox() {    // TO Unload the Popupbox
            $j('#popup_box').fadeOut("slow");
            $j("#container").css({ // this is just for style        
                "opacity": "1"  
            }); 
        }    
        
        function loadPopupBox() {    // To Load the Popupbox
            $j('#popup_box').fadeIn("slow");
            $j("#container").css({ // this is just for style
                "opacity": "0.3"  
            });         
        }        
    });
