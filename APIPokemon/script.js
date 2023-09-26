let id;

const cores = {
    fire: '#B45237',
    grass: '#7cfc00',
    electric: '#DEFF1C',
    water: '#00FFFF',
    ground: '#ab7b59',
    rock: '#65645D',
    fairy: '#F3D4DE',
    poison: '#993399',
    bug: '#64b514',
    dragon: '#000080',
    psychic: '#f17ea1',
    flying: '#daedf5',
    fighting: '#581d22',
    normal: '#F5F5F5',
    ice: '#fffafa',
    steel: '#c0c0c0'
}

function carregarPokemon() {	

	id = Math.floor(Math.random() * 1010 + 1);

	let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.clear();
			console.log(data);
			document.getElementById("nome").innerHTML = data['name'];
			let img = data['sprites']['front_default'];
			document.getElementById("pokemon").setAttribute('src', img);
			document.getElementById("tipo").innerHTML = data['types']['0']['type']['name'];
			let tipo = data['types']['0']['type']['name'];
			let cor = cores[tipo];
			document.getElementById("tipo").style.color = cor;
			console.log(data['types']);
			if(data['types'].length > 1){

				document.getElementById("tipo2").innerHTML = data['types']['1']['type']['name'];
				tipo = data['types']['1']['type']['name'];
				cor = cores[tipo];
				document.getElementById("tipo2").style.color = cor;
			}
			else{
				document.getElementById("tipo2").innerHTML = ""
			}
		})
		.catch((erro) => {
			console.log("Erro: " + erro);
		});
	
}

document.getElementById("botao").onclick = function(){carregarPokemon()}

