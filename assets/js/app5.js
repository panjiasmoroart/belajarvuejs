var app = new Vue({
    el: '#app',
    data: {
        //property: value.
        //show: 'ready',
        //show: false,
        show: true,
        message: 'Hello World!',
        message2: 'Hello Vue!',
        int1: 10,
        int2: 5,
        result: null,
    },

    // dimana property ini dapa mengolah value yang berasal dari property data 
    computed: {
        sum: function() {
            return this.int1 + this.int2;
        }
    },

    // method property
    methods: {
        sumProcess: function(int3) {
            return this.result = this.int1 + this.int2 + int3;
        }
    }

})
// alert('test')
// kalo false
// <p v-if="!show">{{ message }}</p>
// 
// kalo show: 'ready' 
// <p v-if="show == 'ready' "></p>
