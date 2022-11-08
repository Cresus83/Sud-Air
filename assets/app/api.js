//* Récupération de la date

var current_date = new Date().toLocaleDateString("en-CA");
var tomorrow = new Date(Date.now() + 3600 * 1000 * 24); // + 1 day in ms
var tomorrow_date = tomorrow.toLocaleDateString("en-CA");
document.body.style.overflowY = "hidden";
//* Script AJAX permettant la récolte d'information auprés de L'API Atmosud-->

async function getVilles() {
  const response = await fetch("assets/app/villes.json");
  let data = await response.json();
  return data;
}

//* Une fois la connexion réussie, affiche dans la balise portant l'ID "test" la donnée récoltée sous forme de liste.

getVilles().then(
  (villes) => {
    const inputcities = document.querySelector(".input");

    inputcities.addEventListener("input", (e) => {
      let value = e.target.value;

      if (value && value.trim().length > 0) {
        value = value.trim().toUpperCase();
        listData(villes.filter((ville) => ville.commune.includes(value)));
      } else {
        clearData();
      }
    });
  },
  (error) => {
    console.log(error);
  }
);

//* Liste les datas de l'API ATMOSUD pour la barre de recherche
const listsearchbar = document.getElementById("listsearch");

function listData(data) {
  clearData();
  if (data.length > 6) {
    for (let i = 0; i < 6; i++) {
      listsearchbar.innerHTML += `<li class='liststyle' onclick='getAirQuality(this, this.value);getPollens(this, this.value)'  value='${data[i].code_insee}' ><i class='fa-solid fa-location-dot icons'></i>${data[i].commune}</li>`;
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      listsearchbar.innerHTML += `<li class='liststyle' onclick='getAirQuality(this, this.value);getPollens(this, this.value)' value='${data[i].code_insee}' ><i class='fa-solid fa-location-dot icons'></i>${data[i].commune}</li>`;
    }
  }
}

//* Appel de la function slide lors du clic sur une ville

const communeselect = document.getElementById("selected");

communeselect.addEventListener("click", slide);

//* Vide les datas recherchées
function clearData() {
  listsearchbar.innerHTML = "";
}

//* Slide vers le bas de 900px et appel la function dataSelected
function slide() {
  window.scrollTo(0, 900);
  document.body.style.overflowY = "scroll";
}

//* Script AJAX permettant la récolte d'information auprés de L'API Atmosud-->

async function getAirQuality(com, insee) {
  //* Stock les informations de la ville séléctionner dans un <input> puis les stockent dans une variable
  const input = document.getElementById("search");
  insee = JSON.stringify(insee);
  insee2 = "0" + insee;

  if (insee.length == 4) {
    input.setAttribute("value", insee2);
  } else {
    input.setAttribute("value", insee);
  }
  input.value = com.textContent;
  const searchThis = input.value;

  //* Affiche le nom de la commune sur la section "Qualité de l'air"
  let citySelected = document.getElementById("citysearch");
  citySelected.innerHTML = searchThis;

  //* Crée la variable permettant d'attribuer le code insee dans l'url fetch

  if (insee.length == 4) {
    params = `&insee=${insee2}`;
  } else {
    params = `&insee=${insee}`;
  }

  //* Fetch de l'url visée
  const response = await fetch(
    `https://api.atmosud.org/iqa2021/commune/bulletin/journalier?&indice=all&dates_echeances=${current_date},${tomorrow_date}&${params}`
  );
  let airdata = await response.json();
  //* Permet de stocker la qualité général de l'air
  const airGen = JSON.stringify(
    airdata[0].bulletins[0].valeurs[0].indice.qualificatif
  );

  const airColor = JSON.stringify(
    airdata[0].bulletins[0].valeurs[0].indice.couleur
  );

  const airColStr = JSON.parse(airColor);
  const airGenStr = JSON.parse(airGen);

  //* Actualisation et assignations des bons conseils/timecode en fonction de la qualité de l'air
  switch (airGenStr) {
    case "Bon":
      var timecode = "0,0.65";
      document.getElementById("air-bon").style.display = "block";
      break;

    case "Moyen":
      var timecode = "0,1.50";
      document.getElementById("air-bon").style.display = "block";
      break;

    case "Dégradé":
      var timecode = "0,2";
      document.getElementById("air-moyen").style.display = "block";
      break;

    case "Mauvais":
      var timecode = "0,3.10";
      document.getElementById("air-moyen").style.display = "block";
      break;

    case "Très mauvais":
      var timecode = "0,3.80";
      document.getElementById("air-moyen").style.display = "block";
      break;

    case "Extrêmement mauvais":
      var timecode = "0,4.60";
      document.getElementById("air-degrade").style.display = "block";
      break;
  }

  const animCode = `<video class="anim" playsinline autoplay preload>

  <source src="assets/anim/Animation.mp4#t=${timecode}"
          type="video/mp4">

</video>`;

  document.getElementById("anim").innerHTML = animCode;

  document.getElementById(
    "pm10"
  ).innerHTML = `<p style='color:${airdata[0].bulletins[0].valeurs[0].pm10.couleur};'>${airdata[0].bulletins[0].valeurs[0].pm10.qualificatif}</p> `;

  document.getElementById(
    "pm2"
  ).innerHTML = `<p style='color:${airdata[0].bulletins[0].valeurs[0]["pm2.5"].couleur};'>${airdata[0].bulletins[0].valeurs[0]["pm2.5"].qualificatif}</p> `;

  document.getElementById(
    "ozone"
  ).innerHTML = `<p style='color:${airdata[0].bulletins[0].valeurs[0].o3.couleur};'>${airdata[0].bulletins[0].valeurs[0].o3.qualificatif}</p> `;

  document.getElementById(
    "azote"
  ).innerHTML = `<p style='color:${airdata[0].bulletins[0].valeurs[0].no2.couleur};'>${airdata[0].bulletins[0].valeurs[0].no2.qualificatif}</p> `;

  document.getElementById(
    "soufre"
  ).innerHTML = `<p style='color:${airdata[0].bulletins[0].valeurs[0].so2.couleur};'>${airdata[0].bulletins[0].valeurs[0].so2.qualificatif}</p> `;

  document.getElementById(
    "general"
  ).innerHTML = `<h3 style='color:${airColStr};'> ${airGenStr}</h3><br> `;

  return airdata;
}

//* Script AJAX permettant la récolte d'information du risque polliniques auprés de L'API Atmosud -->

async function getPollens(com, insee) {
  //* Stock les informations de la ville séléctionner dans un <input> puis les stockent dans une variable
  const input = document.getElementById("search");
  input.setAttribute("value", insee);
  input.value = com.textContent;
  const searchThis = input.value;
  console.log(searchThis);
  let inseestr = JSON.stringify(insee);

  if (inseestr.length == 4) {
    params = insee2;
  } else {
    params = insee;
  }

  //* Affiche le nom de la commune sur la section "Qualité de l'air"
  let citySelected = document.getElementById("citysearch2");
  citySelected.innerHTML = searchThis;

  //* Fetch de l'url visée
  const response = await fetch(
    `https://api.atmosud.org/siam/v1/communes/${params}`
  );
  let pollendata = await response.json();
  pollenData(pollendata);
  console.log(pollendata);
  return pollendata;
}

//* Fonction permettant de filtrer et afficher les données du pollen
function pollenData(pollendata) {
  //* Récupération de la couleur de l'indice général
  couleur = pollendata.data.pollens.indice_pollen;
  if (couleur == 1) {
    couleurind = "#377D22";
  } else if (couleur == 2) {
    couleurind = "#FFA800";
  } else if (couleur == 3) {
    couleurind = "#AE0F0F";
  } else if (couleur == 0) {
    couleurind = "#ffffff";
  }

  const taxonstabl = Array(pollendata.data.pollens.taxons);

  const pollentab = new Array();

  for (let b = 0; b < taxonstabl[0].length; b++) {
    const indicestab = new Array(
      JSON.stringify(pollendata.data.pollens.taxons[b].indice)
    );

    if (indicestab == "1") {
      let pollstr = JSON.stringify(pollendata.data.pollens.taxons[b].label);
      pollentab.push(JSON.parse(pollstr));
    }
  }

  //* Liste les div portant la classe '.taxons'
  const taxons = document.querySelectorAll(".taxons");

  //* Boucle permettant de comparer les 2 tableaux et d'afficher leurs présences ou non
  for (let i = 0; i < taxons.length; i++) {
    //* Création d'un tableau pour lister les div possédant la dataset 'taxon'
    var taxonsarray = Array(taxons[i].dataset["taxon"]);

    //* Fonction permettant la comparaison des 2 tableaux
    function findEqualDatas(taxonsarray, pollentab) {
      return taxonsarray.some((item) => pollentab.includes(item));
    }

    //* Vérification de la sortie de la fonction de comparaison
    //* Si 'true' ne fais rien
    if (findEqualDatas(taxonsarray, pollentab) == true) {
    }
    //* Si 'false' cache la carte spécifique
    else {
      taxons[i].style.display = "none";
    }
  }
  //* Affichage de l'indice général
  document.getElementById(
    "generalpollen"
  ).innerHTML = `<h2 style='color:${couleurind};'> ${pollendata.data.pollens.indice_pollen}</h2><br> `;
}
