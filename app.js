//const getFilmDate = (id) => 
$("button").click(function(){
	$.ajax({
	url: "https://swapi.co/api/films/",
	type: "GET",
	success: function (data){
		$('#films').append(JSON.stringify(data));
		}
	})
})