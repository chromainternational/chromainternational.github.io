$(document).ready(function(){
	$("#contactForm").validate();
	$("#contactForm").submit(function(){
	$('.msg',this).hide();
	$('.error-msg',this).hide();
	var isvalidate=$("#contactForm").valid();
	var h_name=document.location.hostname;
	var form_data=$(this).serialize();
	console.log(h_name);
	if(isvalidate){
	$.post('http://'+h_name+'/chroma/sendmail.php',form_data,function(data) {
		if(!data){
			$("#contactForm .msg").text("The message has been send successfully!!")
			$("#contactForm label input").val("");
			$("#contactForm textarea").val("");
			$("#contactForm .msg").show();
		}else{
		$("#contactForm .error-msg").text("The message couldn't be send!!!");
		$("#contactForm .error-msg").show();
		}
	});
	
	}else{
	
	
	}
	return false;
	});
	/* The following code is executed once the DOM is loaded */
	
	$('.sponsorFlip').bind("click",function(){
		
		// $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):
		
		var elem = $(this);
		
		// data('flipped') is a flag we set when we flip the element:
		
		if(elem.data('flipped'))
		{
			// If the element has already been flipped, use the revertFlip method
			// defined by the plug-in to revert to the default state automatically:
			
			elem.revertFlip();
			
			// Unsetting the flag:
			elem.data('flipped',false)
		}
		else
		{
			// Using the flip method defined by the plugin:
			
			elem.flip({
				direction:'lr',
				speed: 350,
				onBefore: function(){
					// Insert the contents of the .sponsorData div (hidden from view with display:none)
					// into the clicked .sponsorFlip div before the flipping animation starts:
					
					elem.html(elem.siblings('.sponsorData').html());
				}
			});
			
			// Setting the flag:
			elem.data('flipped',true);
		}
	});

	
});