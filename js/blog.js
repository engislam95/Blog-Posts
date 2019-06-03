$(document).ready(function(){

	  $.get("https://jsonplaceholder.typicode.com/posts",function(response)
	  {

	    $.each(response,function(index,element)
	    {
	    	$('#head').text(element.title) ;
	    	$('#content').text(element.body);

	    	$('.blog-post').append(' <h5 id="headH"> ('+element.id+') POST OF YOU</h5> <h2  id="head-blog">' + element.title + '</h2>  <p id="content">' + element.body + '</p>  <hr>')



	    })
	})

	  $('.sign').click(function(){

	  	window.location.href="form.html" ;
	  })

})