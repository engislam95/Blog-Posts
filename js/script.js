$(document).ready(function(){

	  $.get("https://jsonplaceholder.typicode.com/posts",function(response)
	  {

	    $.each(response,function(index,element)
	    {
	    	
		$(".Dashboard").append("<div class='all' > <div class='post-name'>  <p>"+ element.title +"</p></div> <div class='post-content'> <p>" +element.body+"</p></div> <div class='actions'>  <span ><button id='edite' type='button' class='btn btn-info'>EDIT</button></span><span> / </span><span> <button id='delet' type='button' class='btn btn-danger'>DELETE</button></span></div> </div> ") ;
	    
	  
		var firstData = localStorage.getItem("my-data");
		var secondData =  localStorage.getItem("my-data-s");
		$('#exampleFormControlTextarea1').val(firstData); 
		$('#exampleFormControlTextarea2').val(secondData); 



		//console.log($('#exampleFormControlTextarea1').val());

	    })


	      removeRow();
	      editItem();
	      submitEdit();
	      

	    

	  })

/*var postNameData = firstData ; 
var postContentData = secondData ;*/

	function removeRow()
	{
		  $('.all .actions #delet').on('click', function () {
				if(confirm("Are Y Sure Y Want to Remove It ??"))
				{

				  var deletee = $(this).parent().parent().parent();
				   var data = $(this).serialize();

					$.ajax('https://jsonplaceholder.typicode.com/posts',{
							data : data,
							type :"POST",
						
							success : function(response)
							{		
								deletee.animate({ opacity: 'hide' }, 'normal');

					
								
						    }
					})
					.done(function(response){

						$('.alert-danger').css({'display': 'block' ,'position':'absolute' , 'top':'2%' , 'left':'37%' ,'height':'75px'})
								.fadeOut(3000);
									
					})
				}
			     return false;
			});
	}

	function editItem()
	{
			$('.all .actions #edite').on('click',function()
			{

				window.location.href = 'edite.html';
		    	var postNameData =  $(this).parent().parent().siblings('.post-name').children('p').text(); 
		    	 var postContentData= $(this).parent().parent().siblings('.post-content').children('p').text(); 

				//console.log(dataa);

				localStorage.setItem("my-data",postNameData);
				localStorage.setItem("my-data-s",postContentData);
				//var objectt = localStorage.getItem("my-data");


				

				$('edite.html').on('load',function()

				{

				var firstData = localStorage.getItem("my-data");
				$('#exampleFormControlTextarea1').val(firstData); 

				var secondData =  localStorage.getItem("my-data-s");
				$('#exampleFormControlTextarea2').val(secondData); 

				})


			})


			
	
	}


	function submitEdit ()
	{
			
				$('#fire').click(function(response){

				
				if( $('#exampleFormControlTextarea1').val()!== "" && $('#exampleFormControlTextarea2').val()!== ""  )
				{

					// when click submit updated-data will be saved into local storage 

					localStorage.setItem("my-data",$('#exampleFormControlTextarea1').val());
					
					localStorage.setItem("my-data-s",$('#exampleFormControlTextarea2').val());

					$.ajax('https://jsonplaceholder.typicode.com/posts',{

							type :"GET",
						
							success : function(response)
							{		
								window.location.href="index.html" ;
								

						    }
					})
				
				}	
				else
				{
					
					$('.alert').css({'display': 'block' ,'position':'absolute' , 'top':'50%' , 'left':'37%' ,'height':'75px'})
							.fadeOut(3000);
												
				}	
				 
				})
			
	}

});
