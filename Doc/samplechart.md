# Line Chart (Biểu đồ đường)
Dưới đây là bốn mẫu biểu đồ Line Chart sử dụng Chart.js với các dữ liệu phức tạp khác nhau. Mỗi biểu đồ sẽ có cấu hình riêng để hiển thị dữ liệu chi tiết và nhiều dataset.

### Sample 1: Line Chart with Multiple Datasets and Complex Data

```javascript
var ctx = document.getElementById('lineChart1').getContext('2d');
var lineChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgb(75, 192, 192)',
                fill: false
            },
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: 'rgb(255, 99, 132)',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Line Chart with Multiple Datasets'
            }
        }
    }
});
```

### Sample 2: Line Chart with Custom Tooltips and Complex Data

```javascript
var ctx = document.getElementById('lineChart2').getContext('2d');
var lineChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Product A',
                data: [120, 130, 180, 170],
                borderColor: 'rgb(54, 162, 235)',
                fill: false
            },
            {
                label: 'Product B',
                data: [90, 110, 140, 130],
                borderColor: 'rgb(75, 192, 192)',
                fill: false
            },
            {
                label: 'Product C',
                data: [60, 80, 100, 90],
                borderColor: 'rgb(255, 159, 64)',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            title: {
                display: true,
                text: 'Line Chart with Custom Tooltips'
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Quarter'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Sales'
                }
            }
        }
    }
});
```

### Sample 3: Line Chart with Different Point Styles and Complex Data

```javascript
var ctx = document.getElementById('lineChart3').getContext('2d');
var lineChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Series 1',
                data: [12, 19, 3, 5],
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
                pointStyle: 'rectRot',
                pointRadius: 5
            },
            {
                label: 'Series 2',
                data: [2, 29, 5, 5],
                borderColor: 'rgb(54, 162, 235)',
                fill: false,
                pointStyle: 'triangle',
                pointRadius: 5
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Line Chart with Different Point Styles'
            }
        }
    }
});
```

### Sample 4: Line Chart with Gradient Fill and Complex Data

```javascript
var ctx = document.getElementById('lineChart4').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(75, 192, 192, 0.2)');
gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');

var lineChart4 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset with Gradient Fill',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: gradient,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Line Chart with Gradient Fill'
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    }
});
```

Đảm bảo rằng bạn đã tạo các phần tử `<canvas>` trong HTML với các ID tương ứng (`lineChart1`, `lineChart2`, `lineChart3`, `lineChart4`) để mỗi biểu đồ có thể được render chính xác.

# Bar Chart (Biểu đồ cột)
Dưới đây là bốn mẫu biểu đồ Bar Chart sử dụng Chart.js với các dữ liệu phức tạp khác nhau. Mỗi biểu đồ sẽ có cấu hình riêng để hiển thị dữ liệu chi tiết và nhiều dataset.

### Sample 1: Bar Chart with Multiple Datasets and Complex Data

```javascript
var ctx = document.getElementById('barChart1').getContext('2d');
var barChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            },
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bar Chart with Multiple Datasets'
            }
        }
    }
});
```

### Sample 2: Horizontal Bar Chart with Complex Data

```javascript
var ctx = document.getElementById('barChart2').getContext('2d');
var barChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            },
            {
                label: 'Dataset 2',
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }
        ]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Horizontal Bar Chart with Complex Data'
            }
        }
    }
});
```

### Sample 3: Stacked Bar Chart with Complex Data

```javascript
var ctx = document.getElementById('barChart3').getContext('2d');
var barChart3 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            },
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            },
            {
                label: 'Dataset 3',
                data: [35, 49, 60, 71, 66, 75, 50],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Stacked Bar Chart with Complex Data'
            }
        },
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});
```

### Sample 4: Grouped Bar Chart with Complex Data

```javascript
var ctx = document.getElementById('barChart4').getContext('2d');
var barChart4 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Product A',
                data: [65, 59, 80, 81],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            },
            {
                label: 'Product B',
                data: [28, 48, 40, 19],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            },
            {
                label: 'Product C',
                data: [35, 49, 60, 71],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Grouped Bar Chart with Complex Data'
            }
        },
        scales: {
            x: {
                stacked: false
            },
            y: {
                stacked: false
            }
        }
    }
});
```

Đảm bảo rằng bạn đã tạo các phần tử `<canvas>` trong HTML với các ID tương ứng (`barChart1`, `barChart2`, `barChart3`, `barChart4`) để mỗi biểu đồ có thể được render chính xác.

# Radar Chart (Biểu đồ radar)
Dưới đây là bốn mẫu biểu đồ Radar Chart sử dụng Chart.js với các dữ liệu phức tạp khác nhau. Mỗi biểu đồ sẽ có cấu hình riêng để hiển thị dữ liệu chi tiết và nhiều dataset.

### Sample 1: Radar Chart with Multiple Datasets and Complex Data

```javascript
var ctx = document.getElementById('radarChart1').getContext('2d');
var radarChart1 = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 90, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                pointBackgroundColor: 'rgb(75, 192, 192)'
            },
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 96, 27, 100],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Radar Chart with Multiple Datasets'
            }
        }
    }
});
```

### Sample 2: Radar Chart with Custom Point Styles and Complex Data

```javascript
var ctx = document.getElementById('radarChart2').getContext('2d');
var radarChart2 = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Reading', 'Writing', 'Listening', 'Speaking', 'Comprehending', 'Analyzing', 'Summarizing'],
        datasets: [
            {
                label: 'Student A',
                data: [75, 80, 85, 70, 90, 95, 100],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointStyle: 'rectRot',
                pointRadius: 5
            },
            {
                label: 'Student B',
                data: [60, 70, 75, 85, 80, 85, 90],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgb(255, 206, 86)',
                pointBackgroundColor: 'rgb(255, 206, 86)',
                pointStyle: 'triangle',
                pointRadius: 5
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Radar Chart with Custom Point Styles'
            }
        }
    }
});
```

### Sample 3: Radar Chart with Different Line Styles and Complex Data

```javascript
var ctx = document.getElementById('radarChart3').getContext('2d');
var radarChart3 = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Speed', 'Strength', 'Endurance', 'Agility', 'Flexibility', 'Coordination'],
        datasets: [
            {
                label: 'Athlete A',
                data: [85, 90, 95, 80, 75, 85],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgb(153, 102, 255)',
                pointBackgroundColor: 'rgb(153, 102, 255)',
                borderDash: [5, 5]
            },
            {
                label: 'Athlete B',
                data: [75, 80, 85, 90, 70, 80],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgb(255, 159, 64)',
                pointBackgroundColor: 'rgb(255, 159, 64)',
                borderDash: [10, 5]
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Radar Chart with Different Line Styles'
            }
        }
    }
});
```

### Sample 4: Radar Chart with Complex Data and Fill Patterns

```javascript
var ctx = document.getElementById('radarChart4').getContext('2d');
var radarChart4 = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Communication', 'Problem Solving', 'Teamwork', 'Leadership', 'Creativity', 'Adaptability'],
        datasets: [
            {
                label: 'Employee A',
                data: [80, 85, 90, 75, 70, 80],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)'
            },
            {
                label: 'Employee B',
                data: [70, 75, 80, 85, 90, 95],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)'
            },
            {
                label: 'Employee C',
                data: [65, 70, 75, 80, 85, 90],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                pointBackgroundColor: 'rgb(75, 192, 192)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Radar Chart with Complex Data and Fill Patterns'
            }
        }
    }
});
```

Đảm bảo rằng bạn đã tạo các phần tử `<canvas>` trong HTML với các ID tương ứng (`radarChart1`, `radarChart2`, `radarChart3`, `radarChart4`) để mỗi biểu đồ có thể được render chính xác.

# Doughnut Chart (Biểu đồ bánh donut)
Dưới đây là bốn mẫu biểu đồ Doughnut Chart sử dụng Chart.js với các dữ liệu phức tạp khác nhau. Mỗi biểu đồ sẽ có cấu hình riêng để hiển thị dữ liệu chi tiết và nhiều dataset.

### Sample 1: Doughnut Chart with Multiple Datasets

```javascript
var ctx = document.getElementById('doughnutChart1').getContext('2d');
var doughnutChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [300, 50, 100, 40, 120, 90],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                hoverOffset: 4
            },
            {
                label: 'Dataset 2',
                data: [200, 150, 75, 60, 30, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                hoverOffset: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Doughnut Chart with Multiple Datasets'
            }
        }
    }
});
```

### Sample 2: Doughnut Chart with Custom Tooltips and Complex Data

```javascript
var ctx = document.getElementById('doughnutChart2').getContext('2d');
var doughnutChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo'],
        datasets: [
            {
                label: 'Market Share Q1',
                data: [30, 25, 20, 15, 10, 5],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                hoverOffset: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Doughnut Chart with Custom Tooltips'
            }
        }
    }
});
```

### Sample 3: Doughnut Chart with Dynamic Data Update

```javascript
var ctx = document.getElementById('doughnutChart3').getContext('2d');
var doughnutChart3 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Online Sales', 'Retail Sales', 'Wholesale'],
        datasets: [
            {
                label: 'Sales Distribution',
                data: [500, 300, 200],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Doughnut Chart with Dynamic Data Update'
            }
        }
    }
});

// Update data dynamically
setTimeout(() => {
    doughnutChart3.data.datasets[0].data = [600, 250, 150];
    doughnutChart3.update();
}, 5000);
```

### Sample 4: Doughnut Chart with Complex Data and Custom Legends

```javascript
var ctx = document.getElementById('doughnutChart4').getContext('2d');
var doughnutChart4 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Revenue by Quarter',
                data: [100, 200, 150, 250],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ],
                hoverOffset: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Doughnut Chart with Custom Legends'
            },
            afterDraw: function(chart) {
                var ctx = chart.ctx;
                chart.data.datasets.forEach((dataset, i) => {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach((element, index) => {
                            // Draw the text in the center of the pie chart
                            ctx.fillStyle = 'black';
                            var fontSize = 16;
                            var fontStyle = 'normal';
                            var fontFamily = 'Arial';
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            var dataString = dataset.data[index].toString() + '%';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            var padding = 5;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                        });
                    }
                });
            }
        }
    }
});
```

Đảm bảo rằng bạn đã tạo các phần tử `<canvas>` trong HTML với các ID tương ứng (`doughnutChart1`, `doughnutChart2`, `doughnutChart3`, `doughnutChart4`) để mỗi biểu đồ có thể được render chính xác.

# Pie Chart (Biểu đồ tròn)
Dưới đây là bốn mẫu biểu đồ Pie Chart sử dụng Chart.js với các dữ liệu phức tạp khác nhau. Mỗi biểu đồ sẽ có cấu hình riêng để hiển thị dữ liệu chi tiết và nhiều dataset.

### Sample 1: Pie Chart with Multiple Datasets

```javascript
var ctx = document.getElementById('pieChart1').getContext('2d');
var pieChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [300, 50, 100, 40, 120, 90],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                hoverOffset: 4
            },
            {
                label: 'Dataset 2',
                data: [200, 150, 75, 60, 30, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                hoverOffset: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pie Chart with Multiple Datasets'
            }
        }
    }
});
```

### Sample 2: Pie Chart with Custom Tooltips and Complex Data

```javascript
var ctx = document.getElementById('pieChart2').getContext('2d');
var pieChart2 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo'],
        datasets: [
            {
                label: 'Market Share Q1',
                data: [30, 25, 20, 15, 10, 5],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                hoverOffset: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pie Chart with Custom Tooltips'
            }
        }
    }
});
```

### Sample 3: Pie Chart with Dynamic Data Update

```javascript
var ctx = document.getElementById('pieChart3').getContext('2d');
var pieChart3 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Online Sales', 'Retail Sales', 'Wholesale'],
        datasets: [
            {
                label: 'Sales Distribution',
                data: [500, 300, 200],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pie Chart with Dynamic Data Update'
            }
        }
    }
});

// Update data dynamically
setTimeout(() => {
    pieChart3.data.datasets[0].data = [600, 250, 150];
    pieChart3.update();
}, 5000);
```

### Sample 4: Pie Chart with Complex Data and Custom Legends

```javascript
var ctx = document.getElementById('pieChart4').getContext('2d');
var pieChart4 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Revenue by Quarter',
                data: [100, 200, 150, 250],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ],
                hoverOffset: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Pie Chart with Custom Legends'
            },
            afterDraw: function(chart) {
                var ctx = chart.ctx;
                chart.data.datasets.forEach((dataset, i) => {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach((element, index) => {
                            // Draw the text in the center of the pie chart
                            ctx.fillStyle = 'black';
                            var fontSize = 16;
                            var fontStyle = 'normal';
                            var fontFamily = 'Arial';
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            var dataString = dataset.data[index].toString() + '%';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            var padding = 5;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                        });
                    }
                });
            }
        }
    }
});
```

Đảm bảo rằng bạn đã tạo các phần tử `<canvas>` trong HTML với các ID tương ứng (`pieChart1`, `pieChart2`, `pieChart3`, `pieChart4`) để mỗi biểu đồ có thể được render chính xác.

# Polar Area Chart (Biểu đồ vùng cực)
Dưới đây là bốn mẫu biểu đồ Polar Area Chart sử dụng Chart.js với các dữ liệu phức tạp khác nhau. Mỗi biểu đồ sẽ có cấu hình riêng để hiển thị dữ liệu chi tiết và nhiều dataset.

### Sample 1: Polar Area Chart with Multiple Datasets

```javascript
var ctx = document.getElementById('polarChart1').getContext('2d');
var polarChart1 = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [11, 16, 7, 3, 14, 6],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ]
            },
            {
                label: 'Dataset 2',
                data: [13, 10, 15, 8, 12, 9],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ]
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Polar Area Chart with Multiple Datasets'
            }
        }
    }
});
```

### Sample 2: Polar Area Chart with Custom Tooltips and Complex Data

```javascript
var ctx = document.getElementById('polarChart2').getContext('2d');
var polarChart2 = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [20, 10, 30, 15, 25],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ]
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            },
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Polar Area Chart with Custom Tooltips'
            }
        }
    }
});
```

### Sample 3: Polar Area Chart with Dynamic Data Update

```javascript
var ctx = document.getElementById('polarChart3').getContext('2d');
var polarChart3 = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Section 1', 'Section 2', 'Section 3', 'Section 4'],
        datasets: [
            {
                label: 'Dynamic Data',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ]
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Polar Area Chart with Dynamic Data Update'
            }
        }
    }
});

// Update data dynamically
setTimeout(() => {
    polarChart3.data.datasets[0].data = [14, 10, 8, 6];
    polarChart3.update();
}, 5000);
```

### Sample 4: Polar Area Chart with Custom Legends and Complex Data

```javascript
var ctx = document.getElementById('polarChart4').getContext('2d');
var polarChart4 = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [
            {
                label: 'Revenue',
                data: [100, 200, 150, 250],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ]
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Polar Area Chart with Custom Legends'
            },
            afterDraw: function(chart) {
                var ctx = chart.ctx;
                chart.data.datasets.forEach((dataset, i) => {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach((element, index) => {
                            // Draw the text in the center of the pie chart
                            ctx.fillStyle = 'black';
                            var fontSize = 16;
                            var fontStyle = 'normal';
                            var fontFamily = 'Arial';
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            var dataString = dataset.data[index].toString() + '%';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            var padding = 5;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                        });
                    }
                });
            }
        }
    }
});
```

Đảm bảo rằng bạn đã tạo các phần tử `<canvas>` trong HTML với các ID tương ứng (`polarChart1`, `polarChart2`, `polarChart3`, `polarChart4`) để mỗi biểu đồ có thể được render chính xác.

# Bubble Chart (Biểu đồ bong bóng)
Dưới đây là bốn mẫu biểu đồ Bubble Chart sử dụng Chart.js với các dữ liệu phức tạp khác nhau. Mỗi biểu đồ sẽ có cấu hình riêng để hiển thị dữ liệu chi tiết và nhiều dataset.

### Sample 1: Basic Bubble Chart with Multiple Datasets

```javascript
var ctx = document.getElementById('bubbleChart1').getContext('2d');
var bubbleChart1 = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [
            {
                label: 'Dataset 1',
                data: [
                    { x: 10, y: 20, r: 15 },
                    { x: 15, y: 10, r: 10 },
                    { x: 20, y: 30, r: 25 }
                ],
                backgroundColor: 'rgb(255, 99, 132)'
            },
            {
                label: 'Dataset 2',
                data: [
                    { x: 25, y: 20, r: 10 },
                    { x: 30, y: 25, r: 15 },
                    { x: 35, y: 15, r: 20 }
                ],
                backgroundColor: 'rgb(54, 162, 235)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Basic Bubble Chart with Multiple Datasets'
            }
        }
    }
});
```

### Sample 2: Bubble Chart with Custom Tooltips and Complex Data

```javascript
var ctx = document.getElementById('bubbleChart2').getContext('2d');
var bubbleChart2 = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [
            {
                label: 'Dataset A',
                data: [
                    { x: 5, y: 15, r: 10 },
                    { x: 10, y: 10, r: 15 },
                    { x: 15, y: 25, r: 20 }
                ],
                backgroundColor: 'rgb(255, 205, 86)'
            },
            {
                label: 'Dataset B',
                data: [
                    { x: 20, y: 30, r: 25 },
                    { x: 25, y: 35, r: 10 },
                    { x: 30, y: 20, r: 15 }
                ],
                backgroundColor: 'rgb(75, 192, 192)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += '(' + context.raw.x + ', ' + context.raw.y + ') r=' + context.raw.r;
                        return label;
                    }
                }
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bubble Chart with Custom Tooltips'
            }
        }
    }
});
```

### Sample 3: Bubble Chart with Dynamic Data Update

```javascript
var ctx = document.getElementById('bubbleChart3').getContext('2d');
var bubbleChart3 = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [
            {
                label: 'Dynamic Dataset',
                data: [
                    { x: 8, y: 12, r: 10 },
                    { x: 15, y: 8, r: 12 },
                    { x: 20, y: 22, r: 15 }
                ],
                backgroundColor: 'rgb(153, 102, 255)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bubble Chart with Dynamic Data Update'
            }
        }
    }
});

// Update data dynamically
setTimeout(() => {
    bubbleChart3.data.datasets[0].data = [
        { x: 12, y: 18, r: 14 },
        { x: 18, y: 15, r: 10 },
        { x: 25, y: 10, r: 20 }
    ];
    bubbleChart3.update();
}, 5000);
```

### Sample 4: Bubble Chart with Multiple Data Points and Complex Data

```javascript
var ctx = document.getElementById('bubbleChart4').getContext('2d');
var bubbleChart4 = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [
            {
                label: 'Dataset 1',
                data: [
                    { x: 5, y: 5, r: 5 },
                    { x: 10, y: 10, r: 10 },
                    { x: 15, y: 15, r: 15 },
                    { x: 20, y: 20, r: 20 },
                    { x: 25, y: 25, r: 25 }
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.6)'
            },
            {
                label: 'Dataset 2',
                data: [
                    { x: 30, y: 10, r: 10 },
                    { x: 35, y: 20, r: 20 },
                    { x: 40, y: 30, r: 30 },
                    { x: 45, y: 40, r: 40 },
                    { x: 50, y: 50, r: 50 }
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bubble Chart with Multiple Data Points'
            }
        }
    }
});
```

Đảm bảo rằng bạn đã tạo các phần tử `<canvas>` trong HTML với các ID tương ứng (`bubbleChart1`, `bubbleChart2`, `bubbleChart3`, `bubbleChart4`) để mỗi biểu đồ có thể được render chính xác.

# Scatter Chart (Biểu đồ phân tán)

Dưới đây là bốn mẫu biểu đồ Scatter Chart sử dụng Chart.js với các dữ liệu phức tạp khác nhau. Mỗi biểu đồ sẽ có cấu hình riêng để hiển thị dữ liệu chi tiết và nhiều dataset.

### Sample 1: Basic Scatter Chart with Multiple Datasets

```javascript
var ctx = document.getElementById('scatterChart1').getContext('2d');
var scatterChart1 = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'Dataset 1',
                data: [
                    { x: -10, y: 0 },
                    { x: 0, y: 10 },
                    { x: 10, y: 5 },
                    { x: 0.5, y: 5.5 }
                ],
                backgroundColor: 'rgb(255, 99, 132)'
            },
            {
                label: 'Dataset 2',
                data: [
                    { x: -5, y: 5 },
                    { x: 5, y: 0 },
                    { x: 15, y: 10 },
                    { x: 10, y: 15 }
                ],
                backgroundColor: 'rgb(54, 162, 235)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Basic Scatter Chart with Multiple Datasets'
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
});
```

### Sample 2: Scatter Chart with Custom Tooltips and Complex Data

```javascript
var ctx = document.getElementById('scatterChart2').getContext('2d');
var scatterChart2 = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'Group A',
                data: [
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 4 },
                    { x: 4, y: 5 }
                ],
                backgroundColor: 'rgb(75, 192, 192)'
            },
            {
                label: 'Group B',
                data: [
                    { x: 2, y: 2 },
                    { x: 3, y: 3 },
                    { x: 4, y: 4 },
                    { x: 5, y: 5 }
                ],
                backgroundColor: 'rgb(153, 102, 255)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += '(' + context.raw.x + ', ' + context.raw.y + ')';
                        return label;
                    }
                }
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Scatter Chart with Custom Tooltips'
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
});
```

### Sample 3: Scatter Chart with Trend Line

```javascript
var ctx = document.getElementById('scatterChart3').getContext('2d');
var scatterChart3 = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'Data Points',
                data: [
                    { x: 1, y: 2 },
                    { x: 2, y: 4 },
                    { x: 3, y: 6 },
                    { x: 4, y: 8 },
                    { x: 5, y: 10 }
                ],
                backgroundColor: 'rgb(255, 159, 64)'
            },
            {
                label: 'Trend Line',
                data: [
                    { x: 1, y: 2 },
                    { x: 5, y: 10 }
                ],
                type: 'line',
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
                borderWidth: 2,
                showLine: true
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Scatter Chart with Trend Line'
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
});
```

### Sample 4: Scatter Chart with Dynamic Data Update

```javascript
var ctx = document.getElementById('scatterChart4').getContext('2d');
var scatterChart4 = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'Dynamic Data Points',
                data: [
                    { x: 5, y: 5 },
                    { x: 10, y: 10 },
                    { x: 15, y: 15 },
                    { x: 20, y: 20 }
                ],
                backgroundColor: 'rgb(255, 205, 86)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Scatter Chart with Dynamic Data Update'
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
});

// Update data dynamically
setTimeout(() => {
    scatterChart4.data.datasets[0].data = [
        { x: 6, y: 6 },
        { x: 12, y: 12 },
        { x: 18, y: 18 },
        { x: 24, y: 24 }
    ];
    scatterChart4.update();
}, 5000);
```

Đảm bảo rằng bạn đã tạo các phần tử `<canvas>` trong HTML với các ID tương ứng (`scatterChart1`, `scatterChart2`, `scatterChart3`, `scatterChart4`) để mỗi biểu đồ có thể được render chính xác.
