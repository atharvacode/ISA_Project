// import AOS from 'aos';
// import 'aos/dist/aos.css';
let myChart = document.getElementById("myChart").getContext('2d');

let newChart = new Chart(myChart, {
  type: 'bar',
  data: {
    labels: ['Mumbai', 'Pune', 'Nagpur', 'Aurengabad', 'Kolhapur', 'Nashik'],
    datasets: [{
      barPercentage: 0.35,
      borderRadius: 5,
      label: 'Max Temperature (°C)',
      data: [28, 24, 27, 25, 26, 28],
      backgroundColor: ['#FF95C5', '#FF95C5', '#FF95C5', '#FF95C5', '#FF95C5', '#FF95C5'],
      borderWidth: 0,
      borderColor: 'gray',
      hoverBorderWidth: 1,
      hoverBorderColor: 'black'
    },
  {
    barPercentage: 0.35,
    borderRadius: 5,
    label: 'Min. Temperature (°C)',
    data: [24, 21, 20, 22, 19, 23],
    backgroundColor: "#1DB9C3",
    borderWidth: 0,
    borderColor: 'gray',
    hoverBorderWidth: 1,
    hoverBorderColor: 'black'
  }],
  },
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide

    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
        },

      },


    },


    plugins: {
      title: {
        display: true,
        text: 'Average Temperature of last 6 days',
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
      tooltips: {
        enabled: false,
      }
    },


    cornerRadius: 5,
  },


});
