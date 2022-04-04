Vue.config.productionTip = false

var report = new Vue({
  el: "#report",
  data:{
      username: "",
      active_section: 0,
      user_info: {},
      img_urls: [],
      posts: [],
      hashtags: [],
      cmt_cnt: [],
      like_cnt: [],
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

callAPI()

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

  var data = JSON.parse(result)

  // 1. set Vue data
  report.user_info = JSON.parse(data.user_info)
  var analysis = JSON.parse(data.account_analysis)
  report.cmt_cnt = analysis.cmt_cnt
  report.like_cnt = analysis.like_cnt
  report.posts = analysis.posts
  report.hashtags = analysis.hashtags

  // 2. drawCharts()
  drawCharts()
}


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