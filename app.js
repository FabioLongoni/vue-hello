
const app = new Vue({
    el: '#root',
    data: {
        title: 'surf-hawai',
    },
    methods: {
        toUpper(text){
            return text.toUpperCase()
        }
    },
})

console.log(app);