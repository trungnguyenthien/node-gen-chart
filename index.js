import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
import { sequelize } from './models/chart.js';
import chartRoutes from './routes/chart.js';
import getRawBody from 'raw-body';
const app = express();
const port = 3005;

// Sử dụng CORS middleware
app.use(cors());

app.use(async (req, res, next) => {
  try {
    req.rawBody = await getRawBody(req, { encoding: 'utf8' });
    next();
  } catch (err) {
    next(err);
  }
});

app.use('/charts', chartRoutes);

const startServer = async () => {
  try {
      await sequelize.sync();
      console.log('Database synced!');
      
      app.listen(port, () => {
          console.log(`Server is running on http://localhost:${port}`);
      });
  } catch (error) {
      console.error('Unable to start the server:', error);
  }
};

startServer();

// app.get('/chart', (req, res) => {
//   let base64Data = req.query.q
//   let decode64 = Buffer.from(base64Data, 'base64').toString('utf-8');
//   let chartData = JSON.parse(decode64);
// });

// // Khởi động server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
