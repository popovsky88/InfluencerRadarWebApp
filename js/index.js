Vue.config.productionTip = false

var search = new Vue({
    el: "#search",
    data:{
        account_id: "",
        hints: ["Lifestyle", "Food", "Fashion", "Study", "Travel", "Photography", "Makeup", "Game"],
    },
    methods: {
        open(hint) {
            window.open("fields.html?field=" + hint)
        }
    }
    
})


function jump() {
    if (search.account_id != "") {
        window.open("dashboard.html?accountid=" + search.account_id)
        // window.location.href = "dashboard.html?accountid=" + search.account_id
    }
        
}

