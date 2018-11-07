var app = new Vue({
    
    el: '#app',
    data: {
        message: '', 
        textarea: '',
        radiobutton: '',
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
