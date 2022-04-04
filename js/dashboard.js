Vue.config.productionTip = false

var report = new Vue({
  el: "#report",
  data:{
      username: "",
      active_section: 0,
      user_info: {
        "biography": "\ud83d\udd35\ud83d\udd34 Me\u0301s Que Un Club\nWe \u2764\ufe0f #Culers\n\ud83d\ude4c #Forc\u0327aBarc\u0327a & #CampNou \ud83c\udfdf\n\ud83d\uddf3 Vote for the #Bar\u00e7aOscars\ud83d\udc47", 
        "id": "17841400710194068", 
        "ig_id": 260375673, 
        "followers_count": 107081471, 
        "media_count": 16236
      },
      img_urls: [
        "../data/likes_25.png",
        "../data/cmts_25.png",
        "../data/recent_cmt_bar.png",
        "../data/recent_cmt_line.png"
      ],
      posts: [
          {
              time: "2022-03-28 18:55",
              comments: 1123,
              likes: 683882,
              caption: "This duo is…"
          },
          {
              time: "2022-03-23 20:00",
              comments: 864,
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
      ],
      cmt_cnts: [1,2,9,4,5,6],
      like_cnts: [23,56,4324,58,373,34]
    },
    methods: {
        clickZero: function() {
            this.active_section = 0
        },
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

var url = decodeURI(window.location.href);

report.username = url.split("?accountid=")[1];


// define the callAPI function that takes a first name and last name as parameters
function callAPI() {
  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append("Content-Type", "application/json");
  // using built in JSON utility package turn object to string and store in a variable
  var raw = JSON.stringify({"username":report.username});
  // create a JSON object with parameters for API call and store in a variable
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };
  // make API call with parameters and use promises to get response
  fetch("https://7cks6lydmb.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
  .then(response => response.text())
  .then(result => renderResult(result))
  .catch(error => console.log('error', error));
}

function renderResult(result) {
  // alert(JSON.parse(result).body)
  console.log(JSON.parse(result).user_info)

  // 1. set Vue data
  // 2. drawCharts()
}

drawCharts()

function drawCharts() {
  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from(Array(6).keys()),
      datasets: [{
        data: report.like_cnts,
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      title: {
          display: true,
          text: 'Likes for Recent 25 Posts'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}

// feather.replace()