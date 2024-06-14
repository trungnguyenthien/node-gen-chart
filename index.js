import express from 'express';
import cors from 'cors';

const app = express();
const port = 3005;

// Sử dụng CORS middleware
app.use(cors());

// Middleware để phân tích yêu cầu JSON
app.use(express.json());

// Định nghĩa một route đơn giản
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route mẫu để nhận dữ liệu JSON từ client
app.post('/data', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Data received', data });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
