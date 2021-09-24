let maharaindata = {
  labels: ['June','July','August','September','Rest of the year'],
  datasets: [{
    tension: 0.5,
    fill: false,
    label: 'Rainfall in %',
    data: ['21%','33%','28%','18%','11%'],
    backgroundColor: ["#98BDFF", "#A2CDCD","#284E78","#93B5C6","#28B5B5"],
    borderColor: "#B5DEFF",

  }]
};

let myChart_6 = document.getElementById('sixthGraph').getContext('2d');
let newChart_6 = new Chart(myChart_6, {
  type: 'pie',
  data: maharaindata,
  options: {
    elements: {
      point: {
        radius: 2.5,
      }
    },

    plugins: {
      title: {
        display: true,
        text: 'Average month-wise Rainfall in Maharashtra over last 30 years (%)',
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
          min: 0,
          max: 6,
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
