"use strict";

window.initMap = function() {
    var customMapType = new google.maps.StyledMapType([{
            stylers: [
                { 'saturation': -100 },
                { 'lightness': 30 },
                { 'visibility': 'simplified' }
            ]
        },
        {
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
        },
        {
            featureType: 'road',
            stylers: [{ color: '#bbb' }]
        }
    ], {
        name: 'Vila do Conde'
    });

    var image = new google.maps.MarkerImage(
        'img/widgets/anchor.png',
        new google.maps.Size(48, 54),
        new google.maps.Point(0, 0),
        new google.maps.Point(24, 54)
    );

    var customMapTypeId = 'custom_style';

    var theatre = { lat: 41.35273, lng: -8.745895 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeControl: false,
        center: theatre, // Teatro Municipal
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });

    var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: 'Vila do Conde',
        position: theatre
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}