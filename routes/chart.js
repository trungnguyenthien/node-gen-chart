import express from 'express';
import { Canvas } from 'skia-canvas';
import { Chart } from 'chart.js/auto';
// import { ChartObj } from '../models/chart.js';
// import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
// import fs from 'fs';
// import path from 'path';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Đường dẫn tuyệt đối tới thư mục gốc của dự án (nơi có file package.json)
const projectRoot = dirname(__dirname); // Điều này giả định src nằm trong thư mục con của root


const router = express.Router();
const imageType = 'image/png'


// Hàm lưu giá trị vào file
function saveVAR(name, value) {
  const dir = join(projectRoot, 'VARS');
  const filePath = join(dir, "var_" + name);

  // Tạo thư mục VARS nếu chưa tồn tại
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
  }

  // Ghi giá trị vào file
  fs.writeFileSync(filePath, JSON.stringify({ value }), 'utf8');
}
// Hàm lấy giá trị từ file
function getVAR(name) {
  const filePath = join(projectRoot, 'VARS', "var_" + name);

  // Kiểm tra file có tồn tại hay không
  if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContent);
      return data.value;
  } else {
      throw new Error(`File ${name} does not exist`);
  }
}

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
    const chartData = getVAR(id)
    // Nếu không tìm thấy, trả về status 404
    // if (!chart) {
    //   return res.status(404).json({ status: 404 });
    // }
    // Nếu tìm thấy, trả về đối tượng chart
    let data = JSON.parse(chartData)
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
    // Tạo GUID và loại bỏ dấu '-'
    const ID = uuidv4().replace(/-/g, '');
    saveVAR(ID, data)
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
