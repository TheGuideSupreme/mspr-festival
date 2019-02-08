new Vue ({ 
    el: '#app',
    data: {
        map: null,
        tileLayer: null,
        layers: [
            {
                id: 0,
                name: 'Scènes',
                active: false,
                features: [
                    {
                        id: 0,
                        name: 'Scène Argental',
                        info: 'Concert en cours : A$AP ROCKY',
                        type: 'marker',
                        icon: 'blackIcon',
                        coords: [46.672760, -1.913947],
                    },
                    {
                        id: 1,
                        name: 'Scène Braco',
                        info: 'Concert en cours : A$AP ROCKY',
                        type: 'marker',
                        coords: [46.674038, -1.916041],
                    },
                    {
                        id: 2,
                        name: 'Scène Goubik',
                        info: 'Concert en cours : A$AP ROCKY',
                        type: 'marker',
                        coords: [46.672803, -1.919581],
                    },
                    {
                        id: 3,
                        name: 'Scène Serpentard',
                        info: 'Concert en cours : A$AP ROCKY',
                        type: 'marker',
                        coords: [46.670840, -1.916742],
                    },
                    {
                        id: 4,
                        name: 'Scène Abracadabra',
                        info: 'Concert en cours : A$AP ROCKY',
                        type: 'marker',
                        coords: [46.671422, -1.913404],
                    },
                ],
            },
            {
                id: 1,
                name: 'Rencontres avec les artistes',
                active: false,
                features: [
                    {
                        id: 0,
                        name: 'Point de rencontre 1',
                        info: 'Artiste présent :<br>Jason Derulo',
                        type: 'marker',
                        coords: [46.673645, -1.914257],
                    },
                    {
                        id: 1,
                        name: 'Point de rencontre 2',
                        info: 'Artiste présent :<br>Solomun',
                        type: 'marker',
                        coords: [46.671823, -1.917355],
                    },
                ],
            },
            {
                id: 2,
                name: 'Buvettes',
                active: false,
                features: [
                    {
                        id: 0,
                        name: 'Buvette Zone 1',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.673834, -1.914202],
                    },
                    {
                        id: 1,
                        name: 'Restaurant Zone 1',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.674037, -1.914128],
                    },
                    {
                        id: 2,
                        name: 'Buvette Zone 2',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.670165, -1.919586],
                    },
                    {
                        id: 3,
                        name: 'Restaurant Zone 2',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.670368, -1.919752],
                    },
                    {
                        id: 4,
                        name: 'Buvette Zone 3',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.672822, -1.916673],
                    },
                    {
                        id: 5,
                        name: 'Restaurant Zone 3',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.672898, -1.916285],
                    },
                ],
            },
            {
                id: 3,
                name: 'Boutiques',
                active: false,
                features: [
                    {
                        id: 0,
                        name: 'Boutique Entrée',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.675203, -1.913168],
                    },
                    {
                        id: 1,
                        name: 'Boutique Centrale',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.672236, -1.916226],
                    },
                ],
            },
            {
                id: 4,
                name: 'Accessibilité (handicap)',
                active: false,
                features: [
                    {
                        id: 0,
                        name: 'Accès handicap',
                        info : 'Entrées et cheminement réservés aux personnes à mobilité réduite',
                        type: 'polygon',
                        coords: [
                            [46.675171, -1.913818],
                            [46.673515, -1.914250],
                        ],
                    },
                    {
                        id: 1,
                        name: 'Accès handicap',
                        info : 'Entrées et cheminement réservés aux personnes à mobilité réduite',
                        type: 'polygon',
                        coords: [
                            [46.673515, -1.914250],
                            [46.672992, -1.915238],
                        ],
                    },
                    {
                        id: 2,
                        name: 'Accès handicap',
                        info : 'Entrées et cheminement réservés aux personnes à mobilité réduite',
                        type: 'polygon',
                        coords: [
                            [46.672992, -1.915238],
                            [46.672908, -1.916668],
                        ],
                    },
                    {
                        id: 3,
                        name: 'Accès handicap',
                        info : 'Entrées et cheminement réservés aux personnes à mobilité réduite',
                        type: 'polygon',
                        coords: [
                            [46.672908, -1.916668],
                            [46.671946, -1.919023],
                        ],
                    },
                    {
                        id: 4,
                        name: 'Accès handicap',
                        info : 'Entrées et cheminement réservés aux personnes à mobilité réduite',
                        type: 'polygon',
                        coords: [
                            [46.675803, -1.913401],
                            [46.675171, -1.913818],
                        ],
                    },
                    {
                        id: 5,
                        name: 'Parking Nord',
                        schedule: '10h-05h',
                        info : 'Infos :<br>Parking gratuit<br>Entrée handicap',
                        type: 'polygon',
                        coords: [
                            [46.674968, -1.914348],
                            [46.675665, -1.915718],
                            [46.677102, -1.913886],
                            [46.676320, -1.912762],
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'Stands d\'information',
                active: false,
                features: [
                    {
                        id: 0,
                        name: 'Accueil',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.675398, -1.912079],
                    },
                    {
                        id: 1,
                        name: 'Centre d\'informations',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.672708, -1.916064],
                    },
                ],
            },
            {
                id: 6,
                name: 'WC',
                active: false,
                features: [
                    {
                        id: 0,
                        name: 'WC Entrée',
                        schedule: '12h-02h',
                        info: 'Accès handicap',
                        type: 'marker',
                        coords: [46.674087, -1.913925],
                    },
                    {
                        id: 1,
                        name: 'WC Centre',
                        schedule: '12h-02h',
                        type: 'marker',
                        coords: [46.672278, -1.917300],
                    },
                ],
            },
            {
                id: 7,
                name: 'Parkings',
                active: false,
                features: [
                    {
                        id: 0,
                        name: 'Parking Nord',
                        schedule: '10h-05h',
                        info : 'Infos :<br>Parking gratuit<br>Entrée handicap',
                        type: 'polygon',
                        coords: [
                            [46.674968, -1.914348],
                            [46.675665, -1.915718],
                            [46.677102, -1.913886],
                            [46.676320, -1.912762],
                        ],
                    },
                    {
                        id: 1,
                        name: 'Parking Est',
                        schedule: '10h-05h',
                        info : 'Infos :<br>Parking gratuit',
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
                    {
                        id: 2,
                        name: 'Parking Sud',
                        schedule: '10h-05h',
                        info : 'Infos :<br>Parking gratuit',
                        type: 'polygon',
                        coords: [
                            [46.671696, -1.909869],
                            [46.671025, -1.908910],
                            [46.670190, -1.908486],
                            [46.669520, -1.908376],
                            [46.669140, -1.908505],
                            [46.668773, -1.908892],
                            [46.669798, -1.910496],
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
            this.map = L.map ('map'). setView ([46.672174, -1.916152], 15); /*Changer ici les coordonnées ([latitude 38.63, longitude -90.23], zoom level of 12)*/
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
                    if(feature.info == null){
                            feature.leafletObject = L.marker(feature.coords)
                            .bindPopup('<strong>'+feature.name+'</strong><br>Horaires : '+feature.schedule);
                    }else if(feature.schedule == null) {
                            feature.leafletObject = L.marker(feature.coords)
                            .bindPopup('<strong>'+feature.name+'</strong><br>'+feature.info);
                    }else{
                            feature.leafletObject = L.marker(feature.coords)
                            .bindPopup('<strong>'+feature.name+'</strong><br>Horaires : '+feature.schedule+'<br>'+feature.info);
                    }
                });
                
                polygonFeatures.forEach((feature) => {
                    if(feature.info == null){
                        feature.leafletObject = L.polygon(feature.coords)
                        .bindPopup('<strong>'+feature.name+'</strong><br>Horaires : '+feature.schedule);
                    }else if(feature.schedule == null) {
                        feature.leafletObject = L.polygon(feature.coords)
                        .bindPopup('<strong>'+feature.name+'</strong><br>'+feature.info);
                    }else{
                        feature.leafletObject = L.polygon(feature.coords)
                        .bindPopup('<strong>'+feature.name+'</strong><br>Horaires : '+feature.schedule+'<br>'+feature.info);
                    }
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