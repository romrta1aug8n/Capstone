const enrolleesCtx = document.getElementById('enrolleesChart').getContext('2d');

new Chart(enrolleesCtx, {
    type: 'doughnut',
    data: {
        labels: ['Farmers', 'Farmworkers/Laborers'],
        datasets: [{
            data: [40, 60],
            backgroundColor: ['#3498db', '#2ecc71']
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Chart - Enrollees Profile'
            },
            legend: {
                display: true,
                position: 'right', 
                align: 'center', 
                labels: {
                    boxWidth: 20, 
                    padding: 10 
                    
                }
            }
        }
    }
    
});
const chartLivestockCtx = document.getElementById('chartLivestock').getContext('2d');
new Chart(chartLivestockCtx, {
    type: 'doughnut',
    data: {
        labels: ['Carabao', 'Cattle', 'Swine', 'Goat', 'Duck'],
        datasets: [{
            data: [20.1, 20.1, 20.1, 20.1, 19.6],
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8'],
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Chart - Livestock'
            },
            legend: {
                display: true,
                position: 'right', 
                align: 'center', 
                labels: {
                    boxWidth: 20, 
                    padding: 10 
                    
                }
            }
        }
    }
});

const chartHVCDPCtx = document.getElementById('chartHVCDP').getContext('2d');
new Chart(chartHVCDPCtx, {
    type: 'doughnut',
    data: {
        labels: ['Banana', 'Petchay', 'Ampalaya', 'Patola', 'Squash'],
        datasets: [{
            data: [11.2, 11.2, 11.2, 11.2, 5.1],
            backgroundColor: ['#ffc107', '#28a745', '#007bff', '#dc3545', '#17a2b8'],
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Chart - HVCDP'
            },
            legend: {
                display: true,
                position: 'right', 
                align: 'center', 
                labels: {
                    boxWidth: 20, 
                    padding: 10 
                    
                }
            }
        }
    }
});