google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
                ['職業別', '薪資'],
                ['工業及服務業', 52215],
                ['工業', 49534],
                ['礦業及土石採取業', 61186],
                ['製造業', 49900],
                ['電力及燃氣供應業', 85545],
                ['用水供應及污染整治業', 45610],
                ['營造業', 45189],
                ['服務業',54317],
                ['批發及零售業', 49796],
                ['運輸及倉儲業', 51977],
                ['住宿及餐飲業', 34619],
                ['資訊及通訊傳播業', 73966],
                ['金融及保險業',99308],
                ['不動產業', 46919],
                ['專業科學及技術服務業',61490],
                ['支援服務業',36756],
                ['教育服務業',24827],
                ['醫療保健服務業',68297],
                ['藝術娛樂及休閒服務業',37813],
                ['其他服務業', 36807]
      ],
      false); // 'false' means that the first row contains labels, not data.
        var options = {
          
          hAxis: {minValue: 0, maxValue: 15},
          vAxis: {minValue: 0, maxValue: 15},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart2);
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['性別', '平均薪資'],
          ['男',  35678],
          ['女',  33669]
        ]);

      var options = {
        legend: 'none',
        pieSliceText: 'label',
        pieStartAngle: 100,
      };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
      }
