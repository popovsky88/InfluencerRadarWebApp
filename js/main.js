Vue.config.productionTip = false

var search = new Vue({
    el: "#search",
    data:{
        account_id: "",
        hints: ["Lifestyle", "Food", "Fashion", "Study", "Travel", "Photography", "Makeup", "Game"],
        user_info: {
            "biography": "\ud83d\udd35\ud83d\udd34 Me\u0301s Que Un Club\nWe \u2764\ufe0f #Culers\n\ud83d\ude4c #Forc\u0327aBarc\u0327a & #CampNou \ud83c\udfdf\n\ud83d\uddf3 Vote for the #Bar\u00e7aOscars\ud83d\udc47", 
            "id": "17841400710194068", 
            "ig_id": 260375673, 
            "followers_count": 107081471, 
            "media_count": 16236
        }
    },
    methods: {
        searchID: function(id) {
            console.log("Searching id...")
            // console.log(this.account_id)

        }
    }

    
})

var report = new Vue({
    el: "#report",
    data:{
        active_section: 1,
        posts: [
            {
                time: "2022-03-28 18:55",
                comments: 1123 ,
                likes: 683882,
                caption: "This duo is…"
            },
            {
                time: "2022-03-23 20:00",
                comments: 864 ,
                likes: 571141,
                caption: "Sempre culer"
            },
            {
                time: "2022-03-25 14:01",
                comments: 987,
                likes: 385326,
                caption: "Vine a animar el fcbfemeni i fem rècord d'assistència!"
            },

        ],
        hashtags: [
            {hashtag: '#BarçaOscars', count: 5},
            {hashtag: '##madeinlamasia', count: 2},
            {hashtag: '#trainingpartner', count: 1},
            {hashtag: '#OTD', count: 1},
            {hashtag: '#MoreThanempowerment', count: 1},
            {hashtag: '#MésQueGènere', count: 1},
            {hashtag: '#ElClásico', count: 1},
            {hashtag: '#Oscar', count: 1},
        ]
    },
    methods: {
        clickOne: function() {
            this.active_section = 1
        },
        clickTwo: function() {
            this.active_section = 2
        },
        clickThree: function() {
            this.active_section = 3
        },
    }
})