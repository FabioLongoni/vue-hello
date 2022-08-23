
const app = new Vue({
    el: '#root',
    data: {
        title: 'surf-hawai',
        img: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/28723.png',
    },
    methods: {
        toUpper(text){
            return text.toUpperCase()
        }
    },
})

console.log(app);