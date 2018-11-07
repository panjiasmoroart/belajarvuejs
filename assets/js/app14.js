var app = new Vue({
    
    el: '#app',
    data: {
        message: ''
    },

    methods: {
        escKey: function() {
            this.message = "Kamu telah menekan tombol esc key";
        },

        spaceKey: function() {
            this.message = "Kamu telah menekan tombol spaceKey key";
        },

        upKey: function() {
            this.message = "Kamu telah menekan tombol upKey";
        },

        downKey: function() {
            this.message = "Kamu telah menekan tombol downKey";
        },

        aKey: function() {
            this.message = "Kamu telah menekan tombol alpabet 'a' ";
        }
     
    }
})



