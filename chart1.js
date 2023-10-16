var ctx = document.getElementById('barChart').getContext('2d'); 
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Earnings',
            data: [50, 49, 51, 58, 50, 43, 45, 55, 50, 50, 50, 60],
            backgroundColor: [
                '#e0dcda',


            ],
            borderColor: 'rgb(41, 155, 99)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});