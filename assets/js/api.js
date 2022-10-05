var date = new Date();
//* Récupération de la date + Ajout de 1 zéro si le jour est inférieur a 10
if (date.getDate() < 10) {
  var current_date =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate());
  var tomorrow_date =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + (date.getDate() + 1));
}
//* Récupération de la date sans ajout de 0
else {
  var current_date =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    date.getDate();
  var tomorrow_date =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    (date.getDate() + 1);
}

//* Script AJAX permettant la récolte d'information auprés de L'API Atmosud-->

async function getVilles() {
  const response = await fetch("assets/js/villes.json");
  let data = await response.json();
  return data;
}

//* Une fois la connexion réussie, affiche dans la balise portant l'ID "test" la donnée récoltée sous forme de liste.

getVilles().then(
  (villes) => {
    const inputcities = document.querySelector(".input");

    inputcities.addEventListener("input", (e) => {
      let value = e.target.value;
      console.log(value);

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
  console.clear();
  listsearchbar.innerHTML = "";
}

//* Slide vers le bas de 900px et appel la function dataSelected
function slide() {
  window.scrollTo(0, 900);
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
  ).innerHTML = `<h3 style='color:${airdata[0].bulletins[0].valeurs[0].indice.couleur};'> ${airdata[0].bulletins[0].valeurs[0].indice.qualificatif}</h3><br> `;

  console.log(airdata);
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

  if (insee == 83137) {
    zone = 3531;
  } else if (insee == 13001) {
    zone = 3526;
  } else if (insee == 84007) {
    zone = 3527;
  } else if (insee == 13055) {
    zone = 3529;
  } else if (insee == 6088) {
    zone = 3530;
  } else if (insee == 5061) {
    zone = 3528;
  } else if (insee == 83050) {
    zone = 4982;
  }

  //* Affiche le nom de la commune sur la section "Qualité de l'air"
  let citySelected = document.getElementById("citysearch2");
  citySelected.innerHTML = searchThis;

  //* Crée la variable permettant d'attribuer le code insee dans l'url fetch
  const params = `zones/${zone}`;

  //* Fetch de l'url visée
  const response = await fetch(`https://api.atmosud.org/pollens/${params}`);
  let pollendata = await response.json();
  pollenData(pollendata);
  return pollendata;
}
//* Fonction permettant de filtrer et afficher les données du pollen
function pollenData(pollendata) {
  //* Récupération de la couleur de l'indice général
  couleur = pollendata.data[0].zones[0].indice;
  if (couleur == 1) {
    couleurind = "#377D22";
  } else if (couleur == 2) {
    couleurind = "#FFA800";
  } else if (couleur == 3) {
    couleurind = "#AE0F0F";
  }

  //* Création d'un tableau pour lister les taxons détéctées par la station
  const taxonstab = new Array(
    JSON.stringify(pollendata.data[0].zones[0].taxons)
  );

  //* Liste les div portant la classe '.taxons'
  const taxons = document.querySelectorAll(".taxons");

  //* Boucle permettant de comparer les 2 tableaux et d'afficher leurs présences ou non
  for (let i = 0; i < taxons.length; i++) {
    //* Création d'un tableau pour lister les div possédant la dataset 'taxon'
    var taxonsarray = Array(taxons[i].dataset["taxon"]);

    //* Fonction permettant la comparaison des 2 tableaux
    function findEqualDatas(taxonsarray, taxonstab) {
      return taxonsarray.some((item) => taxonstab[0].includes(item));
    }

    //* Vérification de la sortie de la fonction de comparaison
    //* Si 'true' ajoute au sein du DOM le texte 'Présence'
    if (findEqualDatas(taxonsarray, taxonstab) == true) {
      document.getElementById(
        "p" + i
      ).innerHTML = `<h4 style='color:${couleurind};'>Présence</h4></div> `;
    }
    //* Si 'false' ajoute au sein du DOM le texte 'Indisponible'
    else {
      document.getElementById(
        "p" + i
      ).innerHTML = `<h4 style='color:white;background-color:#AE0F0F;'>Indisponible</h4></div>`;
    }
  }
  //* Affichage de l'indice général
  document.getElementById(
    "generalpollen"
  ).innerHTML = `<h2 style='color:${couleurind};'> ${pollendata.data[0].zones[0].indice}</h2><br> `;
}
