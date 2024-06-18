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

app.use('/chart', chartRoutes);

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