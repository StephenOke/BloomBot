var data = {
    labels: [0, 2, 3, 4, 5, 6],
    datasets: [
        {
            label: "Dataset 1",
            data: [10, 20, 30, 40, 50],
            borderColor: 'rgb(189,195,199)',
            lineTension: 0.8
        }
    ]
};

var config = {
    type: 'line',
    data: data,
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
