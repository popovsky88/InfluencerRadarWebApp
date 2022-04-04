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

  var user_info = JSON.parse(result).user_info
  var account_analysis = JSON.parse(result).account_analysis

  // 1. set Vue data
  report.user_info = JSON.parse(user_info)
  var analysis = JSON.parse(account_analysis)
  report.cmt_cnt = analysis.cmt_cnt
  report.like_cnt = analysis.like_cnt
  report.posts = analysis.posts
  report.hashtags = analysis.hashtags

  // 2. drawCharts()
  drawCharts()
}

drawCharts()


function drawCharts() {
  // Graphs
  var ctx = document.getElementById('likeChart')
  // eslint-disable-next-line no-unused-vars
  var likeChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from(Array(25).keys()),
      datasets: [{
        data: report.like_cnt,
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
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

  var ctx = document.getElementById('cmtChart')
  // eslint-disable-next-line no-unused-vars
  var cmtChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from(Array(25).keys()),
      datasets: [{
        data: report.cmt_cnt,
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#F57ED4',
        borderWidth: 4,
        pointBackgroundColor: '#F57ED4'
      }]
    },
    options: {
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