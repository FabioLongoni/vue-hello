
const app = new Vue({
    el: '#root',
    data: {
        title: 'surf-hawai',
        img: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/28723.png',
        myClass: 'h1-font-size h1-font',
    },
    methods: {
        toUpper(text){
            return text.toUpperCase()
        }
    },
})

console.log(app);