var demo = new Vue({
    el: '#main',
    data: {
        posts: [],
        artistes: [],
        programmesVendredi: [],
        programmesSamedi: [],
        programmesDimanche: [],
        partenaires :[],
        faqs : [],
        endroits :[],
        affichage: {
            listeArtistes: true,
            Artiste: true,
            Programme: false,
            programmeVendredi: false,
            programmeSamedi: false,
            programmeDimanche: false,
            partenaire: false,
            endroit: false,
            faq: false
        },
           
    },
mounted: function() {
    this.recuperedArtistes();
},

    methods: {
        getlisteArtistes: function () {
            for (a in this.affichage){
                this.affichage[a] = false
            }
            this.affichage.listeArtistes = true
        },
        getProgramme: function () {
            for (a in this.affichage){
                this.affichage[a] = false
            }
            this.affichage.Programme = true
        },
        getprogrammeVendredi: function () {
            for (a in this.affichage){
                this.affichage[a] = false
            }
            this.affichage.Programme = true
            this.affichage.programmeVendredi = true
        },
        getprogrammeSamedi: function () {
            for (a in this.affichage){
                this.affichage[a] = false
            }
            this.affichage.Programme = true
            this.affichage.programmeSamedi = true
        },
        getprogrammeDimanche: function () {
            for (a in this.affichage){
                this.affichage[a] = false
            }
            this.affichage.Programme = true
            this.affichage.programmeDimanche = true
        },
        getPartenaires: function () {
            for (a in this.affichage){
                this.affichage[a] = false
            }
            this.affichage.partenaire = true
        },
        getFAQ: function () {
            for (a in this.affichage){
                this.affichage[a] = false
            }
            this.affichage.faq = true
        },
        getEndroits: function () {
            for (a in this.affichage){
                this.affichage[a] = false
            }
            this.affichage.endroit = true
        },

        recuperedArtistes: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/v2/artiste/?per_page=100').then(function (response) {
                response.json().then(function (response) {
                    // console.log(response)
                    vm.artistes = response
                })
            })
        },

        recuperedProgrammationVendredi: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/V2/concert_vendredi/?per_page=100').then(function (response) {
                response.json().then(function (response) {
                    console.log(response)
                    vm.programmesVendredi = response
                })
            })
        },
        recuperedProgrammationSamedi: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/V2/concert_samedi/?per_page=100').then(function (response) {
                response.json().then(function (response) {
                    console.log(response)
                    vm.programmesSamedi = response
                })
            })
        },
        recuperedProgrammationDimanche: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/V2/concert_dimanche/?per_page=100').then(function (response) {
                response.json().then(function (response) {
                    console.log(response)
                    vm.programmesDimanche = response
                })
            })
        },
        recuperedPartenaires: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/V2/partenaire/?per_page=100').then(function (response) {
                response.json().then(function (response) {
                    console.log(response)
                    vm.partenaires = response
                })
            })
        },
        recuperedFAQ: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/V2/faq/?per_page=100').then(function (response) {
                response.json().then(function (response) {
                    console.log(response)
                    vm.faqs = response
                })
            })
        },
        recuperedEndroits: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/V2/endroits/?per_page=100').then(function (response) {
                response.json().then(function (response) {
                    console.log(response)
                    vm.endroits = response
                })
            })
        }
    }
});

