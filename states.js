

let data1 = {
  labels: [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"],
  datasets: [{
    barPercentage: 0.3,
    tension: 0.5,
    label: 'Temperature (°C)',
    data: [28,20, 22.5,26,25,27.5, 25.5, 23,19,14,24,25,23.5,24.5,26,21,21,21,21,26,23,24,18,27.5,26.5,21,18,24,27,24,25,25,22,26,28,27],
    backgroundColor: "#98BDFF",
    borderColor: 'rgb(75, 192, 192)',
    fill: false,
  }]
};


let myChart_3 = document.getElementById('thirdChart').getContext('2d');
let newChart_3 = new Chart(myChart_3,{
           type: 'bar',
           data: data1,

           options: {
             elements: {
               point: {
                 radius: 2.5,
               }
             },

             plugins: {
               title: {
                 display: true,
                 text: 'Average Temperature of Indian states',
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
              max:35,
            } ,



             },
             cornerRadius: 5,
             responsive: true,
             maintainAspectRatio: true,

           }





});
