<?php
ini_set('display_errors', 'on');
?>

<!DOCTYPE html>
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
    <meta property="og:description"
          content="Sud'Air, première agence locale dédiée à l'évaluation de la qualité de l'air de la région Provence-Alpes-Côte-d'Azur"/>
    <meta property="og:locale" content="fr_FR"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="Sud'Air | Accueil"/>
    <meta name="twitter:description"
          content="Sud'Air, première agence locale dédiée à l'évaluation de la qualité de l'air de la région Provence-Alpes-Côte-d'Azur"/>
    <title>Sud'Air | Accueil</title>

    <!-- Links -->
    <link href="assets/img/favicon.svg" rel="icon">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">

</head>

<body class="unselectable">

<?php
include_once('_navbar/navbar.php');
?>

<!-- ======= Section Hero ======= -->
<section id="hero">
    <video src="assets/img/hero-main.mp4" autoplay="autoplay" muted="muted" loop="loop"></video>
    <div class="hero-container">
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
            <button><img alt="lightbulb-conseil" src="assets/img/lightbulb.png">Nos conseils pour améliorer votre
                bien-être et respirer un air meilleur.
            </button>
        </div>

        <a href="#air-quality" class="btn-scroll scrollto" title="Scroll Down"><i class="bx bx-chevron-down"></i></a>
    </div>
</section><!-- End Hero -->

<main id="main">

    <!-- ======= Section Qualité de l'air ======= -->
    <section id="air-quality">
        <div class="container">

            <div class="section-title">
                <span>Qualité de l'air</span>
                <h2>Qualité de l'air</h2>
            </div>

            <h1 class="text-center">Coup d'œil sur la qualité de l'air à <span style="color:#644bff;"
                                                                               id="citysearch"></span>.</h1>

            <div class="row">
                <div class="col-sm-12">
                    <div class="Airdata text-center">
                        <div class="general">
                            <h4>Qualité générale de l'air :</h4>
                            <div id="general"></div>
                            <br>
                        </div>
                    </div>
                </div>

                <div class="row d-flex justify-content-center text-center">
                    <div class="col-xs-6 col-sm-2">
                        <div class="custom-card">
                            <h4>PM 10</h4>
                            <img style="width: 100px;height: 100px" src="assets/img/pm10.png" alt="PM10-icon">
                            <div id="pm10"></div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-2">
                        <div class="custom-card">
                            <h4>PM 2.5</h4>
                            <img style="width: 100px;height: 100px" src="assets/img/PM2.webp" alt="PM2.5-icon">
                            <div id="pm2"></div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-2">
                        <div class="custom-card">
                            <h4>OZONE</h4>
                            <img style="width: 100px;height: 100px" src="assets/img/ozone.png" alt="ozone-icon">
                            <div id="ozone"></div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-2">
                        <div class="custom-card">
                            <h4>AZOTE</h4>
                            <img style="width: 100px;height: 100px" src="assets/img/azote.png" alt="azote-icon">
                            <div id="azote"></div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-2">
                        <div class="custom-card">
                            <h4>SOUFRE</h4>
                            <img style="width: 100px;height: 100px" src="assets/img/soufre.png" alt="soufre-icon">
                            <div id="soufre"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ======= Section Risques Polliniques ======= -->
    <section id="pollen_risque">
        <div class="container">

            <div class="section-title">
                <span>Risque pollinique</span>
                <h2>Risque pollinique</h2>
            </div>

            <h1 class="text-center">Coup d'œil sur le risque pollinique à <span style="color:#644bff;"
                                                                                id="citysearch2"></span>.</h1>


            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="Airdata text-center">
                            <h4>Risque pollinique général :</h4>
                            <div class="indice-pollinique">
                                <img class="general-pollen" style="width: 30%;height: 30%" src="assets/img/pollen.png"
                                     alt="pollen-icon">
                                <div id="generalpollen" class="circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="row d-flex justify-content-center text-center">
                            <div class="col-sm-4">
                                <div class="custom-card taxons" data-taxon="Ambroisie">
                                    <h4>AMBROISIES</h4>
                                    <img style="width: 100px;height: 100px" src="assets/img/pollen.png"
                                         alt="pollen-icon">
                                    <div id="p0"></div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="custom-card taxons" data-taxon="Armoise">
                                    <h4>ARMOISES</h4>
                                    <img style="width: 100px;height: 100px" src="assets/img/pollen.png"
                                         alt="pollen-Symbole">
                                    <div id="p1"></div>

                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="custom-card taxons" data-taxon="Graminées">
                                    <h4>GRAMINÉES</h4>
                                    <img style="width: 100px;height: 100px" src="assets/img/pollen.png"
                                         alt="pollen-icon">
                                    <div id="p2"></div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="custom-card taxons" data-taxon="Oseille">
                                    <h4>OSEILLES</h4>
                                    <img style="width: 100px;height: 100px" src="assets/img/pollen.png"
                                         alt="pollen-Symbole">
                                    <div id="p3"></div>

                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="custom-card taxons" data-taxon="Peuplier">
                                    <h4>PEUPLIER</h4>
                                    <img style="width: 100px;height: 100px" src="assets/img/pollen.png"
                                         alt="pollen-Symbole">
                                    <div id="p4"></div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="custom-card taxons" data-taxon="Plantain">
                                    <h4>PLANTAIN</h4>
                                    <img style="width: 100px;height: 100px" src="assets/img/pollen.png"
                                         alt="pollen-Symbole">
                                    <div id="p5"></div>

                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="custom-card taxons" data-taxon="Platane">
                                    <h4>PLATANE</h4>
                                    <img style="width: 100px;height: 100px" src="assets/img/pollen.png"
                                         alt="pollen-Symbole">
                                    <div id="p6"></div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="custom-card taxons" data-taxon="Saule">
                                    <h4>SAULE</h4>
                                    <img style="width: 100px;height: 100px" src="assets/img/pollen.png"
                                         alt="pollen-Symbole">
                                    <div id="p7"></div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="custom-card taxons" data-taxon="Urticacées">
                                    <h4>URTICACÉES</h4>
                                    <img style="width: 100px;height: 100px" src="assets/img/pollen.png"
                                         alt="pollen-Symbole">
                                    <div id="p8"></div>

                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="row">
                </div>
            </div>
        </div>
    </section>

</main><!-- Fin #main -->

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></a>

<!-- Vendor JS Files -->
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="https://kit.fontawesome.com/b5858ea88a.js" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
        crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="assets/js/api.js"></script>
<script src="assets/js/main.js"></script>
</body>

</html>