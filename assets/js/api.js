//* Script AJAX permettant la récolte d'information auprés de L'API Atmosud-->

async function getVilles() {
  const response = await fetch("datas/villes.json");
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
function listData(data) {
  const listsearchbar = document.getElementById("listsearch");
  clearData();
  if (data.length > 6) {
    for (let i = 0; i < 6; i++) {
      listsearchbar.innerHTML =
        "<li class='liststyle ' > <i class='fa-solid fa-location-dot icons'></i>" +
        data[i].commune +
        "</li>";
      console.log(data[i].commune);
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      listsearchbar.innerHTML =
        "<li class='liststyle' ><i class='fa-solid fa-location-dot icons'></i>" +
        data[i].commune +
        "</li>";
      console.log(data[i].commune);
    }
  }
}

//* Vide les datas recherchées
function clearData() {
  console.clear();
}

function slide() {
  window.scrollTo(0, 1080);
}
//* Slide vers le bas lorsque l'user clique sur sa ville

const communeselect = document.getElementById("selected");

communeselect.addEventListener("click", slide);

$(document).ready(function () {
  //* Lorsque la liste déroulante subit un changement d'état le script suivant démarre.
  $("#test").change(function () {
    //* Stockage de la valeur de l'option séléctionner dans une variable JS.
    var cp_insee = $("#test option:selected").val();

    //* Les informations d'accés a l'API, ainsi que l'url permettant la récolte spécifique de données en fonction du CP de la ville selectionné.
    $.ajax({
      type: "GET",
      dataType: "json",
      url:
        "https://api.atmosud.org/iqa2021/commune/bulletin/journalier/derniers?format_indice=couleur,qualificatif&indice=iqa&format=json&insee=" +
        cp_insee +
        "&srid=2154",
      headers: {
        Authorization: "cbea358a42c4815c2d583addf593c1de",
      },
      //* Une fois la connexion reussie; stock les différentes données dans 3 variables différentes.
      success: function (predict) {
        //* Permet de suivre le résultat depuis la console.
        console.log(predict);
        //* Les 3 variables ou les données sont stockées.
        const date_dif = predict.date_diffusion;
        const couleur = predict.indices[0].valeurs[0].indice.couleur;
        const qualif = predict.indices[0].valeurs[0].indice.qualificatif;
        //* Affichage dans la zone visé par l'ID.
        $("#difuser").append('<p style="color:blue;">' + date_dif + "</p>");
        $("#difuser").append(
          '<h1 style="color:' + couleur + ';">' + qualif + "</h1>"
        );
      },
    });
  });
});
