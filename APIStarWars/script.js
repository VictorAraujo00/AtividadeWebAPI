const listaPessoas = document.getElementById("listaPessoas");
const btAnterior = document.getElementById("btAnterior");
const btProxima = document.getElementById("btProxima");
let ordem = 1; 

const exibirLista = (lista) => {
  listaPessoas.innerHTML = "";
  listaPessoas.start = ordem;
  for (let i = 0; i < lista.length; ++i) {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `${lista[i].name} (${lista[i].birth_year}) (${lista[i].height} cm)`
    );
    li.appendChild(text);
    listaPessoas.appendChild(li);
  }
};

const configurarBotoes = (data) => {
  const { previous, next } = data;

  btAnterior.disabled = previous === null;
  btAnterior.onclick = () => {
    fetchAPI(previous);
    btAnterior.disabled = true;
    ordem -= 10;
  };

  btProxima.disabled = next === null;
  btProxima.onclick = () => {
    fetchAPI(next);
    btProxima.disabled = true;
    ordem+=10;
  };
};

const fetchAPI = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      exibirLista(data.results);
      configurarBotoes(data);
    });
};

fetchAPI("https://swapi.dev/api/people/?page=1");
