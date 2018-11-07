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

Vue.component('button-counter', {
    
    data: function () {
        return {
            count: 0
        }
    },

    template: '<button v-on:click="count++">Click Me {{ count }} times</button>'
});

new Vue({ 
    el: '#app',
});

