let data3 = {
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
                "Lakshadweep"],
    
    datasets: [{
        barPercentage: 0.3,
        tension: 0.5,
        label: 'Average Annual Rainfall (mm)',
        data: [1094, 2782, 2812, 1200, 1400, 3005, 868, 617, 1251, 1011, 1186, 2000, 3055, 1215, 1455, 
                1881, 2818, 1881, 1881, 1489, 649, 540, 2739, 998, 961, 1881, 1667, 1025, 1439, 2967,
                617, 1403, 700, 617, 1515],
        backgroundColor: "#ECA3F5",
        borderColor: 'rgb(75, 192, 192)',
        
    }]

};

let myChart_5 = document.getElementById('fifthChart').getContext('2d');
let newChart_5 = new Chart(myChart_5,{
           type: 'bar',
           data: data3,

           options: {
             elements: {
               point: {
                 radius: 2.5,
               }
             },

             plugins: {
               title: {
                 display: true,
                 text: 'Average Annual Rainfall of Indian States(mm)',
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
              min: 0
            } ,



             },
             cornerRadius: 5,
             responsive: true,
             maintainAspectRatio: false,

           }
});
