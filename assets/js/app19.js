// component 
Vue.component('blog-post', {
    // template: '<b>Hello Vue From Component..</b>'
    // menggunakan backtic ` qoute yang berada dibawah esc
    props: ['post'],
    template: `
        <div>
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});


new Vue({ 
    el: '#app',
    data: {
        posts: [
            {id: 1, title: 'My VueJS With Laravel', content: 'Lorem ipsum'},
            {id: 2, title: 'Ruby On Rails ReactJS', content: 'Lorem ipsum'},
            {id: 3, title: 'Backend Django Framework', content: 'Lorem ipsum'},
        ]
    }
});


