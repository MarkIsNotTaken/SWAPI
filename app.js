var storage = [];
$("body").append("<input id='input'>");

const buildHtmlElements = (movie) => {
	var films = storage[0].results;
	// for (let loop of films){
	// 		let div = "<div class='container'></div>";
	// 		$('#films').append(div);
	// 		let divs = $('.container');
	// 	}
	$("body").append("<div id='container'></div>");

}

$("button").click(function(){
	$.ajax({
	url: "https://swapi.co/api/films/",
	type: "GET",
	success: function getFilmData(data){
		storage.push(JSON.parse(JSON.stringify(data)));
		buildHtmlElements($("#input").innerText);
		}
	})
})

