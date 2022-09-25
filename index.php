<?php
ini_set('display_errors', 'on');
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description"
          content="Sud'Air, première agence locale dédiée à l'évaluation de la qualité de l'air de la région Provence-Alpes-Côte-d'Azur"/>
    <meta name="robots" content="index, follow"/>
    <meta property="og:title" content="Sud'Air | Accueil"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="#">
    <meta property="og:description" content="Sud'Air, première agence locale dédiée à l'évaluation de la qualité de l'air de la région Provence-Alpes-Côte-d'Azur"/>
    <meta property="og:locale" content="fr_FR"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="Sud'Air | Accueil"/>
    <meta name="twitter:description" content="Sud'Air, première agence locale dédiée à l'évaluation de la qualité de l'air de la région Provence-Alpes-Côte-d'Azur"/>
    <title>Sud'Air | Accueil</title>

    <?php
    ini_set('display_errors', 'on');
    ?>

    <!doctype html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="description"
              content="Sud'Air, première agence locale dédiée à l'évaluation de la qualité de l'air de la région Provence-Alpes-Côte-d'Azur"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="Sud'Air | Accueil"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="#">
        <meta property="og:description" content="Sud'Air, première agence locale dédiée à l'évaluation de la qualité de l'air de la région Provence-Alpes-Côte-d'Azur"/>
        <meta property="og:locale" content="fr_FR"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Sud'Air | Accueil"/>
        <meta name="twitter:description" content="Sud'Air, première agence locale dédiée à l'évaluation de la qualité de l'air de la région Provence-Alpes-Côte-d'Azur"/>
        <title>Sud'Air | Accueil</title>

        <!-- Links -->
        <link href="assets/img/favicon.svg" rel="icon">
        <link href="assets/css/accueil.css" rel="stylesheet">
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">

    </head>
<body class="unselectable">

<?php
include_once('_navbar/navbar.php');
?>

<!-- ======= Hero Section ======= -->
<section id="hero">
    <video src="assets/img/hero-main.mp4" autoplay="autoplay" muted="muted" loop="loop"></video>

    <div class="container" id="container-hero">
        <h1>Consultez la qualité de l’air de la région Provence-Alpes Côte d’Azur !</h1>
        <div class="wrapper">
            <div class="search-input">
                <a href="" target="_blank" hidden></a>
                <input id="search" class="input" type="text" placeholder="Recherchez votre ville...">
                <div class="autocom-box">

                </div>
                <div class="icon"><i class="fas fa-search"></i></div>
                <div class="" id="selected">
                    <ul id="listsearch">

                    </ul>
                </div>
            </div>
            <p>Powered by AtmoSud</p>
        </div>

        <div class="conseil-box">
            <button><img alt="lightbulb-conseil" src="assets/img/lightbulb.png">Nos conseils pour améliorer votre bien-être et respirer un air meilleur.</button>
        </div>
    </div>
</section><!-- End Hero -->

<main id="main">

    <!-- ======= Section Qualité de l'air ======= -->
    <section id="hero">
        <video src="assets/img/air-quality.mp4" autoplay="autoplay" muted="muted" loop="loop"></video>

        <div class="container" id="container-hero">
        <h1>QUALITÉ DE L'AIR A <span style="color:#644bff;" id="citysearch"></span></h1>
            <div class="Airdata">
                <h2 style="color:white;">Qualité général de l'air :</h4><br>
                <div id="general">
                </div>
              <div class="card pm10">
                <h4>PM 10</h4>
                <div id="pm10">

                </div><br>
              </div> 
              <div class="card pm2.5">
                <h4>PM 2.5</h4>
                <div id="pm2">

                </div><br>
              </div> 
              <div class="card ozone">
                <h4>OZONE</h4>
                <div id="ozone">

                </div><br>
              </div> 
              <div class="card azote">
                <h4>AZOTE</h4>
                <div id="azote">

                </div><br>
              </div> 
              <div class="card souffre">
                <h4>SOUFFRE</h4>
                <div id="souffre">

                </div><br>
              </div> 
            </div>
        </div>
    </section><!-- Fin Qualité de l'air -->

    <!-- ======= Section Indice de risque Pollinique ======= -->
    <section id="hero">
        <video src="assets/img/pollen.mp4" autoplay="autoplay" muted="muted" loop="loop"></video>

        <div class="container" id="container-hero">
            <h1>Consultez la qualité de l’air de la région Provence-Alpes Côte d’Azur !</h1>
            <div class="wrapper">
                <div class="search-input">
                    <a href="" target="_blank" hidden></a>
                    <input id="search" class="input" type="text" placeholder="Recherchez votre ville...">
                    <div class="autocom-box">

                    </div>
                    <div class="icon"><i class="fas fa-search"></i></div>
                    <div class="" id="selected">
                        <ul id="listsearch">

                        </ul>
                    </div>
                </div>
                <p>Powered by AtmoSud</p>
            </div>

            <div class="conseil-box">
                <button><img alt="lightbulb-conseil" src="assets/img/lightbulb.png">Nos conseils pour améliorer votre bien-être et respirer un air meilleur.</button>
            </div>
        </div>
    </section><!-- Fin Indice de risque Pollinique -->

    <!-- ======= Section Prévisions Journalières ======= -->
    <section id="hero">
        <video src="assets/img/previsions.mp4" autoplay="autoplay" muted="muted" loop="loop"></video>

        <div class="container" id="container-hero">
            <h1>Consultez la qualité de l’air de la région Provence-Alpes Côte d’Azur !</h1>
            <div class="wrapper">
                <div class="search-input">
                    <a href="" target="_blank" hidden></a>
                    <input id="search" class="input" type="text" placeholder="Recherchez votre ville...">
                    <div class="autocom-box">

                    </div>
                    <div class="icon"><i class="fas fa-search"></i></div>
                    <div class="" id="selected">
                        <ul id="listsearch">

                        </ul>
                    </div>
                </div>
                <p>Powered by AtmoSud</p>
            </div>

            <div class="conseil-box">
                <button><img alt="lightbulb-conseil" src="assets/img/lightbulb.png">Nos conseils pour améliorer votre bien-être et respirer un air meilleur.</button>
            </div>
        </div>
    </section><!-- Fin Prévisions Journalières -->

</main><!-- End #main -->
</body>


<!-- Script -->
<script src="https://kit.fontawesome.com/b5858ea88a.js" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
        crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="assets/js/api.js"></script>



</html>