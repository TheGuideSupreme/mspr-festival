var demo = new Vue({
    el: '#main',
    data: {
        posts: [],
        artistes: [],
        programmesVendredi :[],
        programmesSamedi :[],
        programmesDimanche :[],
        affichage: {
            listeArtistes: true,
            Artiste: false,
            Programme: false,
            programmeVendredi : false
           
        }
    },


    methods: {

        getArtiste: function () {
            this.affichage.listeArtistes = false
            this.affichage.Artiste = true
        },
        getProgramme: function () {
            this.affichage.listeArtistes = false 
            this.affichage.Programme = true    
        },
        getprogrammeVendredi: function () {
            this.affichage.listeArtistes = false 
            this.affichage.programmeVendredi = true  
              
        },

        recuperedArtistes: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/v2/artiste').then(function (response) {
                response.json().then(function (response) {
                    // console.log(response)
                    vm.artistes = response
                })
            })
        },
        
        recuperedProgrammationVendredi: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/V2/concert_vendredi').then(function (response) {
                response.json().then(function (response) {
                    console.log(response)
                    vm.programmesVendredi = response
                })
            })
        },
        recuperedProgrammationSamedi: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/V2/concert_samedi').then(function (response) {
                response.json().then(function (response) {
                    console.log(response)
                    vm.programmesSamedi = response
                })
            })
        },
        recuperedProgrammationDimanche: function () {
            vm = this
            fetch('https://pierrejacquesbibet.com/wp-json/wp/V2/concert_dimanche').then(function (response) {
                response.json().then(function (response) {
                    console.log(response)
                    vm.programmesDimanche = response
                })
            })
        }
    }
});

