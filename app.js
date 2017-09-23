$("button").click(c = () => {
	$.ajax({
	url: "https://swapi.co/api/films/",
	type: "GET",
	success: function getFilmData(data){
		const buildHtmlElements = (id) => {
		$("#films").append("<div id='container'></div>"),
		$("#container").append("<h1 class='title'> Title: " + data.results[id].title + "</h1>"),
		$("#container").append("<h1 class='director'> Director: " + data.results[id].director + "</h1>"),
		$("#container").append("<h1 class='episode'> Episode: " + data.results[id].episode_id + "</h1>"),
		$("#container").append("<h1 class='producer'> Producer: " + data.results[id].producer + "</h1>"),
		$("#container").append("<h1 class='opening_crawl'> Opening Crawl: " + data.results[id].opening_crawl + "</h1>"),
		$("#container").append("<h1 class='release_date'> Release Date: " + data.results[id].release_date + "</h1>"),
		$("#container").append("<div>&nbsp</div>"),
		$("#container").append("<div>&nbsp</div>")
			}
		buildHtmlElements(0);
		buildHtmlElements(1);
		buildHtmlElements(2);
		buildHtmlElements(3);
		buildHtmlElements(4);
		buildHtmlElements(5);
		buildHtmlElements(6);
		}
	})
})

