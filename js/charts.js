let chart = document.getElementById('barChart').getContext('2d');
let barChar = new Chart(chart, {
  type: 'radar',
  data: {
    labels: ['HTML', 'CSS', 'JS', 'PHP', 'MySql', 'React'],
    datasets: [{
      label: "Student A",
      backgroundColor: "rgba(200,0,0,0.2)",
      data: [65, 75, 70, 80, 60, 80]
    }, {
      label: "Student B",
      backgroundColor: "rgba(0,0,200,0.2)",
      data: [54, 65, 60, 70, 70, 75]
    }]
},
  options: {
    responsive: true,
    tooltips: {
      mode: 'nearest',
    },
    layout: {
        padding: {
            left: 40,
            right: 50,
            top: 20,
            bottom: 20
        }
    },
    scales: {
     
    
     
  }

}
});
let radar = document.getElementById('radarChart').getContext('2d');
let radarChar = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['HTML', 'CSS', 'JS', 'PHP', 'MySql', 'React'],
    datasets: [{
      label: "Student A",
      backgroundColor: "rgba(200,0,0,0.2)",
      data: [65, 75, 70, 80, 60, 80]
    }, {
      label: "Student B",
      backgroundColor: "rgba(0,0,200,0.2)",
      data: [54, 65, 60, 70, 70, 75]
    }]
},
  options: {
    responsive: true,
    tooltips: {
      mode: 'nearest',
    },
    layout: {
        padding: {
            left: 40,
            right: 50,
            top: 20,
            bottom: 20
        }
    },
    scales: {
     
    
     
  }

}

});