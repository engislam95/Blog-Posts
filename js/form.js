$(document).ready(function(){


		$('form').submit(function(event){
			event.preventDefault();
	
					var email = $("input[name='email']");
					var password = $("input[name='password']");

					var checkEmailValidation = /^[a-zA-Z0-9]+\w+@+\S+[.com]$/g ;
					var detectEmailValidation =checkEmailValidation.test(email.val());

					// at least one number, one lowercase and one uppercase letter
				    // at least six characters that are letters, numbers or the underscore

				    var checkPasswordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
				    var detectPasswordValidation =checkPasswordValidation.test(password.val());


				    console.log(detectPasswordValidation);

					//console.log(detectValidation);
					//console.log(email.val());

					var proccedEmail = true;
					var proccedPassword = true;
					
					var errorEmail = '<span>Enter valid email</span>';
					var errorPassword = '<span>Enter valid Password</span>';

					if(!email.val() == "" && detectEmailValidation==true && email.val().indexOf(".com") >= 0 )
					{ 	
							proccedEmail=true; 
					}
					else
					{
						proccedEmail=false;	
						email.parent().append(errorEmail);
					}
					if(!password.val() == "" && detectPasswordValidation==true)
					{ 
							
							proccedPassword=true;
							
					}
					else
					{
						password.parent().append(errorPassword);
						proccedPassword=false;
					}

					/* ----------- Ajax Detection ---------------------*/


					if(proccedEmail==true && proccedPassword==true)
					{

					var url = "https://jsonplaceholder.typicode.com/posts"; 
					var data = $(this).serialize();
					
					$.ajax(url,{
					data : data,
					type :"POST",
					
					success : function(response){
						
								window.location.href="dash.html" ;

								}
					
					})
						
					.done(function(response){
					$('body').append('<div class="alert alert-success alert-dismissible fade in" role="alert">\
											<strong>You have successfuly contact us.</strong>\
										</div>');
					$('.alert').fadeOut(1000);
					setTimeout(function(){
						$('.alert').remove();
					},2000);
					})

					.fail(function(jqXHR)
					{
						var error = "<p> sorry there is an error " ;

						error +=" please try again </p>" ; 

						$("#sign").html(error);
					});
				
			}
		});
			});
				
