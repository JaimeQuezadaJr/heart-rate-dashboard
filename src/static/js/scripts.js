const fetchData = async () => {
    const response = await fetch('/data');
    const data = await response.json();
    return data;
};

const renderChart = (data) => {
    const ctx = document.getElementById('heartRateChart').getContext('2d');
    const labels = data.map(entry => new Date(entry.date).toLocaleDateString());
    const scores = data.map(entry => entry['Resting Heart Rate Score']);

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Resting Heart Rate Score',
                data: scores,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

fetchData().then(data => renderChart(data));