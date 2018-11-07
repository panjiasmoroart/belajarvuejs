// component 
Vue.component('greeting', {
    // template: '<b>Hello Vue From Component..</b>'
    // menggunakan backtic ` qoute yang berada dibawah esc
    template: `
        <div>
            <b>Hello Vue From Component</b> <br />
            <i>Hello Vue From Component</i> <br />
            <u>Hello Vue</u>
        </div>
    `
});

var app = new Vue({ 
    el: '#app',
});
