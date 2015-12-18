$(document).ready(function(){

	function showResults(results){
		console.log(results);

		var html="";
		$.each(results, function(index,value){
			videoLink = "https://www.youtube.com/watch?v="+value.id.videoId;
			console.log(videoLink);
			html += '<a href='+ videoLink +'><div  class="col-lg-2 col-md-3 col-sm-4 col-sx-6"><p>'+ value.snippet.title + '</p>';
			html += '<img src='+ value.snippet.thumbnails.default.url +'></div></a>';
		});
		console.log(html);
		return html;
	}

	function getRequest(searchTerm){
		var params={
			part: "snippet",
			key: "AIzaSyDBF-yShvf4_pGtEBHpzVaEq2WBacOmqRk",
			q: searchTerm
		};
		
		url = 'https://www.googleapis.com/youtube/v3/search/?';

		$.getJSON(url, params,function(data){
			console.log(data.items);
			results = showResults(data.items);
			$("#list").html(results);
		});
	}


  	$("#search-term").on('click',function(event){
  		event.preventDefault();
  		var searchTerm = $("#query").val();
  		$("#query").val("");
  		console.log(searchTerm);
  		getRequest(searchTerm);
  	});

});