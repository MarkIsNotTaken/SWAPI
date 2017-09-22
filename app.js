const buildHtmlElements = (responseData) => {
	$("#films").append("<div id='container'></div>"),
	$("#container").append("<h1 class='title'></h1>"),
	$("#container").append("<h1 class='director'></h1>"),
	$("#container").append("<h1 class='episode'></h1>"),
	$("#container").append("<h1 class='producer'></h1>"),
	$("#container").append("<h1 class='opening_crawl'></h1>"),
	$("#container").append("<h1 class='release_date'></h1>")
}

$.ajax({
	url: "https://swapi.co/api/films/",
	type: "GET",
	success: function getFilmData(data){
			
	}
})

$("button").click(c = () => {
	
})



