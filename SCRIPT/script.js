"use strict";

require([
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/LayerList",
    "esri/widgets/Search",
    "esri/widgets/DistanceMeasurement2D",
], function (WebMap, MapView, ScaleBar, Legend, BasemapGallery, Expand, LayerList, DistanceMeasurement2D, Search) {

    const map = new WebMap({
        portalItem: {
            id: "420a07b8e74f435991259975e08d3e64"
        }
    });

    const view = new MapView({
        container: "map",
        map: map,
        zoom: 2,
    });

    //Przesunięcie / strzałka
    let przesuniecie = document.getElementById("scroll");
    let przesun = header.scrollHeight + banner.scrollHeight;

    przesuniecie.addEventListener("click", () => window.scrollTo({
            top: przesun,
            behavior: "smooth"
    }));

    // Widgety
    const bmWg = new BasemapGallery({
        view: view
    });

    const expandWg = new Expand({
        view: view,
        content: bmWg
    });

    const legend = new Legend({
        view: view
    })

    const expandLg = new Expand({
        view: view,
        content: legend
    });

    const scalebar = new ScaleBar({
        view: view
    });  

    const searchWidget = new Search({
        view: view
    });

    const layerList = new LayerList({
        view:view
    });

    const measurement = new DistanceMeasurement2D({
        view: view
    });

    //Umiejscowienie widgetów
    view.ui.add(expandLg, "top-left");

    view.ui.add(expandWg, {
        position: "top-left"
    });

    view.ui.add(scalebar, "bottom-left")

    view.ui.add(searchWidget, {
        position: "bottom-right"
    });

    view.ui.add(layerList, {
        position: "top-right"
    });
    view.ui.add(measurement, "top-right");

    //Linki
    let l1 = document.getElementById("photo1");
    let l2 = document.getElementById("photo2");
    let l3 = document.getElementById("photo3");
    let l4 = document.getElementById("photo4");
    let l5 = document.getElementById("photo5");
    let l6 = document.getElementById("photo6");
    let l7 = document.getElementById("photo7");


    l1.addEventListener("click", function(event) {
        event.preventDefault();
        view.center= [103.46, 37.49]
        view.zoom = 12
    });

    l2.addEventListener("click", function(event) {
        event.preventDefault();
        view.center= [35.45, 30.32]
        view.zoom = 9
    });

    l3.addEventListener("click", function(event) {
        event.preventDefault();
        view.center= [-43.21, -22.95]
        view.zoom = 9
    });

    l4.addEventListener("click", function(event) {
        event.preventDefault();
        view.center = [-72.54, -13.16]
        view.zoom = 9
    });

    l5.addEventListener("click", function(event) {
        event.preventDefault();
        view.center= [-88.57, 20.68]
        view.zoom = 9
    });

    l6.addEventListener("click", function(event) {
        event.preventDefault();
        view.center= [12.49, 41.89]
        view.zoom = 9
    });

    l7.addEventListener("click", function(event) {
        event.preventDefault();
        view.center = [78.04, 27.18]
        view.zoom = 9
    });
});
