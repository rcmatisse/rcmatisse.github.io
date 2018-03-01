
	var timer = setInterval(refresh, 3000);

	var motto = [
	"Profesor de informática", 
	"Actualmente en el IES Henri Matisse",
	"Me interesa la tecnología",
	"y sus aplicaciones en la educación",
	"Realizo cursos online",
	"Disponible para charlas",
	];

	function refresh () {
		var rnd = Math.floor(Math.random()*motto.length);
		var rnd_past = -1;

		if(rnd != rnd_past) {
			$("#motto").html(motto[rnd]);
			rnd_past = rnd;
		}
		
	}
