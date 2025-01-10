let chartType = 'bar';
let chart;

const fetchData = async () => {
    const response = await fetch('/data');
    const data = await response.json();
    return data;
};

const renderChart = (data) => {
    const ctx = document.getElementById('heartRateChart').getContext('2d');
    const labels = data.map(entry => new Date(entry.date).toLocaleDateString());
    const scores = data.map(entry => entry['Resting Heart Rate Score']);

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: 'Resting Heart Rate Score',
                data: scores,
                borderColor: 'rgba(0, 113, 227, 1)',
                backgroundColor: 'rgba(0, 113, 227, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(0, 113, 227, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 113, 227, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2, // Adjust this value to control the aspect ratio
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: '#1d1d1f'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: '#1d1d1f'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#1d1d1f'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(0, 113, 227, 1)',
                    borderWidth: 1
                }
            }
        }
    });
};

document.getElementById('toggleChartType').addEventListener('click', () => {
    chartType = chartType === 'bar' ? 'line' : 'bar';
    fetchData().then(data => renderChart(data));
});

fetchData().then(data => renderChart(data));