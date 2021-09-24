
let data = {
  labels: ['reference(°C)','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug'],
  datasets: [{
    tension: 0.5,
    label: 'Temperature (°C)',
    data: [0,23.9, 24.7, 26.7, 28.2, 29, 27.4, 25.9,25.6],
    backgroundColor: "#98BDFF",
    borderColor: 'rgb(75, 192, 192)',
    fill: false,
  }]
};

let myChart_2 = document.getElementById('secondChart').getContext('2d');

let newChart_2 = new Chart(myChart_2, {
      type: 'line',
      data: data,

      options: {
        elements: {
          point: {
            radius: 2.5,
          }
        },

        plugins: {
          title: {
            display: true,
            text: 'Average Temperature of Mumbai in each month of 2021',
            color: 'black',
            font: {
              family: "Montserrat",
              size: 15,
            },
          },

          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontColor: '#000'
            }
          },
        },

        scales: {
          x: {

            grid: {
              display: true,
            },
          },

          y: {
         min: 0,
         max:40,
       } ,



        },
        cornerRadius: 5,
        responsive: true,
        maintainAspectRatio: true,

      }});
