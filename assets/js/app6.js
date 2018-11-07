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
        kilometers: 0,
        meters: 0,
    },

    // dimana property ini dapa mengolah value yang berasal dari property data 
    computed: {
        sum: function() {
            return this.int1 + this.int2;
        }
    },

    methods: {
        sumProcess: function(int3) {
            return this.result = this.int1 + this.int2 + int3;
        }
    },

    
    //property watch akan melakukan perubahan data atau melakukan suatu proses ketika property yg lainnya
    //sedang melakukan tugas
    //syarat menggunakan property watch ini data yang akan kita manipulasi dengan nama property 
    //yang kita buat harus sama
    watch: {
        kilometers: function(val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },

        meters: function(val) {
            this.kilometers = val / 1000;
            this.meters = val;
        }
    }

})
// alert('test')
// kalo false
// <p v-if="!show">{{ message }}</p>
// 
// kalo show: 'ready' 
// <p v-if="show == 'ready' "></p>
//
// perbedaan computed property dan method property 
// computed property memiliki fitur seperti catch artinya ketika pertama kali di eksekusi nilai yang diha
// asilkan tersebut aka disimpan ke dalama nama propertynya
//
// method property ketika kita akan memanggil suatu nilai yang dihasilkan method tersebut maka function 
// yang ada di dalam property tersebut akan kita jalankan lagi dan seterusnya
//
