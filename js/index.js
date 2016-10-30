var myApp = new Framework7();
var $$ = Dom7;

var map;
var view;
var mapLayer;
var glPoint;
var glPointG;
var currentPoint;

var modeManual = false;
var photoURLS = new Array();
var msgtitle = "Dinamica Urbana";
var baseMapUrl = "http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/Mapa_Referencia/Mapa_Base/MapServer";
var _url_photo = 'https://20161028t112846-dot-dinamica-147714.appspot.com/Imagen';
var _url_msg = 'https://20161028t112846-dot-dinamica-147714.appspot.com/Registro?';

gotoMain();

if (isPhoneGapExclusive()) {
    document.addEventListener("deviceready", onDeviceReady, false);
} else {
    $(document).ready(function () {
        init();
    });
};

function onDeviceReady() {
    $(document).ready(function () {
        init();
    });
}

function init() {
    if (isPhoneGapExclusive()) {
        if ((navigator.connection.type == 0) || (navigator.connection.type == 'none')) {
            navigator.notification.alert('Esta aplicación requiere conexión a internet.', null, msgtitle);
            $("#bienvenida-toolbar").hide();
        }
    }
    initMap();
}

function initMap() {
    try {
        dojo.require("esri.map");
        dojo.require("esri.layers.MapImageLayer");
        dojo.require("esri.layers.MapImage");
        dojo.require("esri.graphic");
        dojo.require("esri.geometry.webMercatorUtils");
        dojo.addOnLoad(initMap2);
    } catch (err) {

    };
}

function initMap2() {
    map = new esri.Map("map", {
        zoom: 10,
        center: new esri.geometry.Point(-74.0668084, 4.600885262127369, { wkid: 4686 }),
        autoresize: false
    });
    dojo.connect(map, "onClick", function (evt) {
        setLocationPoint(evt);
    });

    mapLayer = new esri.layers.ArcGISTiledMapServiceLayer("http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/Mapa_Referencia/Mapa_Base/MapServer/");
    map.addLayer(mapLayer);
    glPoint = new esri.layers.GraphicsLayer();
    glPoint.setRenderer(new esri.renderer.SimpleRenderer(
            new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
            new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
            new dojo.Color([255, 0, 0, 0.75]), 2),
            new dojo.Color([255, 0, 0, 0.75]))));
    map.addLayer(glPoint, 0);
    updateSize();
    //initLocationGPS();
}

function initLocationGPS() {
    try {

        navigator.geolocation.getCurrentPosition(function (position) {
            currentPointX = position.coords.longitude;
            currentPointY = position.coords.latitude;
            var currentPoint = new esri.geometry.Point(currentPointX, currentPointY, { wkid: 4686 });
            glPoint.clear();
            glPoint.add(new esri.Graphic(currentPoint,
                    new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 15,
                    new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color("#FF0000"), 2),
                    new dojo.Color("#FF0000")),
                    null, null));
            map.centerAt(currentPoint);
        },
            function (error) {

            },
            { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 });
    } catch (err) {

    }
}

function updateSize() {
    var the_height = window.innerHeight - $("#header").height() - $("#footer").height() - 10;
    $("#map").height(the_height);
    if (map) {
        map.resize();
        map.reposition();
    };
};

function setLocation() {
    modeManual = true;
    glPoint.clear();
};

function setLocationPoint(evt) {
    if (modeManual) {
        modeManual = false;
        currentPointX = evt.mapPoint.x;
        currentPointY = evt.mapPoint.y;
        var currentPoint = new esri.geometry.Point(currentPointX, currentPointY, { wkid: 4686 });
        glPoint.clear();
        glPoint.add(new esri.Graphic(currentPoint,
                new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 15,
                new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color("#FF0000"), 2),
                new dojo.Color("#FF0000")),
                null, null));
        map.centerAt(currentPoint);
    }
}

function gotoMain() {
    $("#mapDiv").css("left", "-2000px");
    $("#mapDiv").css("position", "absolute");
    $("#map-toolbar").hide();
    $("#map-header").hide();

    $("#reporteDiv").hide();
    $("#reporte-toolbar").hide();

    $("#bienvenidaDiv").show();
    $("#bienvenida-toolbar").show();
}

function gotoMap() {
    $("#mapDiv").css("left", "0px");
    $("#mapDiv").css("position", "");
    $("#map-toolbar").show();
    $("#map-header").show();

    $("#bienvenidaDiv").hide();
    $("#bienvenida-toolbar").hide();

    $("#reporteDiv").hide();
    $("#reporte-toolbar").hide();

    updateSize();
};

function gotoReporte() {
    $("#mapDiv").css("left", "-2000px");
    $("#mapDiv").css("position", "absolute");
    $("#map-toolbar").hide();
    $("#map-header").hide();

    $("#bienvenidaDiv").hide();
    $("#bienvenida-toolbar").hide();

    $("#reporteDiv").show();
    $("#reporte-toolbar").show();

    photoURLS = new Array();
    $('#fnombre')[0].value = "";
    $('#fcorreo')[0].value = "";
    $('#fdescripcion')[0].value = "";
    $('#photolist').html("");
};

function addPhotos(sourceType) {
    navigator.camera.getPicture(captureSuccess, captureFail, {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: sourceType,
        encodingType: Camera.EncodingType.JPEG
    });
};

var imageCache;

function captureSuccess(imageURI) {
    myApp.showPreloader("Cargando foto, por favor, espere.");

    var fail, ft, options, params, win;
    options = new FileUploadOptions();
    options.fileKey = "nva_imagen";
    options.fileName = "imagen_" + new Date().getTime() + ".jpg";
    ft = new FileTransfer();
    imageCache = imageURI;
    ft.upload(imageURI, _url_photo, uploadSuccessFT, uploadFail, options);
}

function captureFail(imageURI) {
    navigator.notification.alert("Error en la captura de la imagen", null, msgtitle);
}

function uploadSuccessFT(response) {
    myApp.hidePreloader();

    var objResponse;
    objResponse = response.response;
    navigator.notification.alert("Foto cargada exitosamente.", null, msgtitle);
    photoURLS.push(objResponse);
    $('#photolist').append('<img class="image_thumb" src="' + imageCache + '" />');
};

function uploadFail(error) {
    myApp.hidePreloader();
    myAppnavigator.notification.alert("No se pudo cargar la foto, por favor, intente m&aacute;s tarde." + JSON.stringify(error), null, msgtitle);
};

function clearPhotos() {
    photoURLS = new Array();
    $("#photolist").html("");
};

function submitReport() {
    $.validity.start();
    $("#fnombre").require();
    $("#fcorreo").require();
    $("#ftipo").require();
    $("#fdescripcion").require();
    if ($.validity.end().errors > 0) {
        navigator.notification.alert('Debe completar todos los campos para enviar un reporte.', null, msgtitle);
        return;
    };

    $.validity.start();
    $("#fcorreo").match("email");
    if ($.validity.end().errors > 0) {
        navigator.notification.alert('Debe ingresar un correo electr&oacute;nico v&aacute;lido.', null, msgtitle);
        return;
    };

    myApp.showPreloader("Enviando reporte, por favor, espere.");

    var photoMSG = '';
    if (photoURLS.length > 0) {
        for (var i = 0; i < photoURLS.length; i++) {
            photoMSG = photoMSG + '&foto=' + encodeURIComponent(photoURLS[i]);
        }
    };
    var msgURL = _url_msg + "nombre=" + $('#fnombre')[0].value + "&email=" + $('#fcorreo')[0].value
                          + "&tipoRegistro=" + $('#ftipo')[0].value + "&descripcion=" + $('#fdescripcion')[0].value
                          + "&latitud=" + currentPoint.x + "&longitud=" + currentPoint.y + photoMSG;
    $.ajax({
        url: msgURL,
        type: 'GET',
        success: function () {                
            myApp.hidePreloader();
            navigator.notification.alert('Reporte enviado exitosamente.', null, msgtitle);
        },
        error: function () {
            myApp.hidePreloader();
            navigator.notification.alert('No se pudo enviar el reporte, por favor, intente m&aacute;s tarde.', null, msgtitle);
        }
    });

    gotoMap();
};

function isPhoneGapExclusive() {
    try {
        return (cordova || PhoneGap || phonegap);
    } catch (err) {
        return false;
    }
}