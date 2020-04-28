let chart = document.getElementById('barChart').getContext('2d');
let barChar = new Chart(chart, {
  type: 'horizontalBar',
  data: {
    labels: ['HTML', 'CSS', 'JS', 'PHP', 'MySql', 'React'],
    datasets: [{
        label: 'experience',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
},
  options: {
    
    layout: {
        padding: {
            left: 10,
            right:0,
            top: 0,
            bottom: 1500
        },
       
      scales: {
        xAxes: [{
            stacked: true,
            gridLines: {
              offsetGridLines: true
          }
        }],
        yAxes: [{
            stacked: true
        }]
    }


    }
}

});