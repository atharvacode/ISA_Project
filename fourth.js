let data2 = {
  labels: ['Agra', 'Allahabad', 'Amritsar', 'Indore', 'Mukteshwar', 'New Delhi', 'Srinagar', 'Bhubaneshwar',
    'Cherrapunji', 'Guvahati', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad', 'Minicoy', 'Port Blair', 'Kochi',
    'Ahmedabad', 'Kota', 'Mumbai', 'Nagpur', 'Panji'],

  datasets: [{
    tension: 0.5,
    fill: true,
    label: 'Humidity in %',
    data: [56, 59, 65, 50, 66, 54, 70, 70, 81, 77, 71, 65, 70, 56, 77, 79, 80, 55, 44, 75, 53, 76],
    backgroundColor: "#98BDFF",
    borderColor: "#B5DEFF",

  }]
};

let myChart_4 = document.getElementById('fourthChart').getContext('2d');
let newChart_4 = new Chart(myChart_4, {
  type: 'line',
  data: data2,
  options: {
    elements: {
      point: {
        radius: 2.5,
      }
    },

    plugins: {
      title: {
        display: true,
        text: 'Average Annual Humidity of Major Cities in %',
        color: 'black',
        font: {
          family: "Montserrat",
          size: 20,
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
        max: 100,
      },





    },
    cornerRadius: 5,
    responsive: true,
    maintainAspectRatio: false,

  }



});
