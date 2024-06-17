import express from 'express';
import { Canvas } from 'skia-canvas';
import { Chart } from 'chart.js/auto';
import { ChartObj } from '../models/chart.js';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
const imageType = 'image/png'

router.get('/', async (req, res) => {
  try {
    let b64string = req.query.q
    let decode = Buffer.from(b64string, 'base64').toString('utf-8');

    let data = JSON.parse(decode)
    res.set('Content-Type', imageType);
    res.send( await renderChart(data));
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error(error);
    res.status(500).json({ status: 500, error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Lấy id từ params
    const { id } = req.params;
    // Tìm đối tượng chart bằng id
    const chart = await ChartObj.findByPk(id);
    // Nếu không tìm thấy, trả về status 404
    if (!chart) {
      return res.status(404).json({ status: 404 });
    }
    // Nếu tìm thấy, trả về đối tượng chart
    let data = JSON.parse(chart.data)
    res.set('Content-Type', imageType);
    res.send( await renderChart(data));
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error(error);
    res.status(500).json({ status: 500, error: error.message });
  }
});


router.post('/', async (req, res) => {
  try {
    // Lấy dữ liệu từ body của request
    const data = req.rawBody;
    console.log("----START-----")
    console.log(data)
    console.log("-----END----")
    // Tính toán MD5 của data
    const md5 = crypto.createHash('md5').update(data).digest('hex');
    // Tạo GUID và loại bỏ dấu '-'
    const ID = uuidv4().replace(/-/g, '');
    // Tạo và insert đối tượng chart vào database
    const newChart = await ChartObj.create({ ID, md5, data });
    console.log(newChart)
    // Trả về JSON với status 200 và GUID mới
    res.json({ status: 200, guid: ID });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error(error);
    res.status(500).json({ status: 500, error: error.message });
  }
});

const renderChart = async (data) => {
  const width = 800;
  const height = 500;
  const canvas = new Canvas(width, height);
  const ctx = canvas.getContext('2d');
  // Đặt nền màu trắng
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  // Tạo biểu đồ
  new Chart(ctx, data);
  // Chuyển đổi canvas thành buffer
  const buffer = await canvas.toBuffer(imageType);
  return buffer;
};

export default router;
