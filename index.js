import express from 'express';
import cors from 'cors';
import { Canvas, Image } from 'skia-canvas';
import { Chart } from 'chart.js/auto';

const app = express();
const port = 3005;

// Sử dụng CORS middleware
app.use(cors());

// Middleware để phân tích yêu cầu JSON
app.use(express.json());

const renderChart = async () => {
  const width = 800;
  const height = 600;
  const canvas = new Canvas(width, height);
  const ctx = canvas.getContext('2d');

  // Tạo dữ liệu và cấu hình cho biểu đồ
  const data = {
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
  };

  // Tạo biểu đồ
  new Chart(ctx, {
      type: 'line',
      data: data
  });

  // Chuyển đổi canvas thành buffer
  const buffer = await canvas.toBuffer('image/png');
  return buffer;
};


app.get('/demo', async (req, res) => {
  try {
      const imageBuffer = await renderChart();
      res.set('Content-Type', 'image/png');
      res.send(imageBuffer);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error generating chart');
  }
});

/**
 {
  "type": "bar",
  "data": {
    "labels": ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    "datasets": [
      {
        "label": 'Dataset 1',
        "data": [65, 59, 80, 81, 56, 55, 40],
        "bgColor": "FFFFFF",
        "bdColor": "FFFFFF",
        "sColor": "FFFFFF",
        "bdw": 1

      }
    ]
  }
 }
 */

// app.get('/chart', (req, res) => {
//   let base64Data = req.query.q
//   let encode64 = Buffer.from(base64Data, 'base64').toString('utf-8');
//   let chartData = JSON.parse(encode64);
// });

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
