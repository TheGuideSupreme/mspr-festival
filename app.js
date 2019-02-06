
new Vue ({ 
    el: '#app',
    data: {
        map: null,
        tileLayer: null,
        layers: [
            {
            id: 0,
            name: 'Informations',
            active: false,
            features: [
                    /*Rentrer ici les points marqués (
                        Concerts
                        Rencontres avec les artistes
                        Buvettes : Genre de restauration (self-service, à l'emporter, petite restauration…), Type de nourriture
                        Boutiques : Type de merchandising
                        Accessibilité : handicap
                        Stands d'information
                        Objets perdus, trouvés
                        WC : normaux et handicapés
                        Parking */
                    {
                        id: 0,
                        name: 'Stand d\'informations',
                        schedule: 'Vendredi : 12h-20h<br>Sam-Dim : 10h-20h',
                        type: 'marker',
                        coords: [46.675398, -1.912079],
                    },
                    {
                        id: 1,
                        name: 'Pappy\'s Smokehouse',
                        address: '11 rue Dobrée',
                        type: 'marker',
                        coords: [38.6350008, -90.2261532],
                    },
                    {
                        id: 2,
                        name: 'Broadway Oyster Bar',
                        type: 'marker',
                        coords: [38.6188362, -90.1947098],
                    },
                    {
                        id: 3,
                        name: 'Charlie Gitto\'s On the Hill',
                        type: 'marker',
                        coords: [38.617972, -90.2756436],
                    },
                    {
                        id: 4,
                        name: 'Sugarfire',
                        type: 'marker',
                        coords: [38.6304077, -90.1916921],
                    },
                    {
                        id: 5,
                        name: 'The Shaved Duck',
                        type: 'marker',
                        coords: [38.6036282, -90.2381407],
                    },
                    {
                        id: 6,
                        name: 'Mango Restaurant',
                        type: 'marker',
                        coords: [38.6313642, -90.1961267],
                    },
                    {
                        id: 7,
                        name: 'Zia\'s Restaurant',
                        type: 'marker',
                        coords: [38.6157376, -90.27716],
                    },
                    {
                        id: 8,
                        name: 'Anthonio\'s Taverna',
                        type: 'marker',
                        coords: [38.6143846, -90.280048],
                    },
                ],
            },
        {
            id: 1,
            name: 'Parking',
            active: false,
            features: [
                {
                    id: 0,
                    name: 'Parking principal',
                    schedule: 'Vendredi : 12h-20h<br>Sam-Dim : 10h-20h',
                    type: 'polygon',
                    coords: [
                        [46.674469, -1.910113],
                        [46.674305, -1.910389],
                        [46.674080, -1.910860],
                        [46.673834, -1.911370],
                        [46.673653, -1.911627],
                        [46.673525, -1.911788],
                        [46.673801, -1.912652],
                        [46.675371, -1.911344],
                    ],
                  },
            ],
          },
        ],
    },
    mounted() {
        this.initMap();
        this.initLayers();
    },
    methods: {
        initMap() {
            this.map = L.map ('map'). setView ([46.672174, -1.916152], 16); /*Changer ici les coordonnées ([latitude 38.63, longitude -90.23], zoom level of 12)*/
            this.tileLayer = L.tileLayer ( ' https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png' , 
            { 
                maxZoom : 18, 
                attribution: '&copy; <a href=" http://www.openstreetmap.org/copyright "> OpenStreetMap </a>, &copy; <a href=" https://carto.com/attribution "> CARTO </a> ', 
            } );
            this.tileLayer.addTo (this.map);
        },

        initLayers() {
            this.layers.forEach((layer) => {
                // Initialize the layer
                const markerFeatures = layer.features.filter(feature => feature.type === 'marker');
                const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');

                markerFeatures.forEach((feature) => {
                    if(feature.address == null){
                            feature.leafletObject = L.marker(feature.coords)
                            .bindPopup('<strong>'+feature.name+'</strong><br>'+feature.schedule);
                    }else{
                            feature.leafletObject = L.marker(feature.coords)
                            .bindPopup('<strong>'+feature.name+'</strong><br>'+feature.address+'<br>'+feature.schedule);
                    }
                });
                
                polygonFeatures.forEach((feature) => {
                    feature.leafletObject = L.polygon(feature.coords)
                      .bindPopup('<strong>'+feature.name+'</strong><br>'+feature.schedule);
                });

            });
        },

        layerChanged(layerId, active) {
            /* Show or hide the features in the layer */
            const layer = this.layers.find(layer => layer.id === layerId);

            layer.features.forEach((feature) => {
                /* Show or hide the feature depending on the active argument */
                if (active) {
                    feature.leafletObject.addTo(this.map);
                } else {
                    feature.leafletObject.removeFrom(this.map);
                }
            });

        },
    }, 
  });