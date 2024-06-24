import express from 'express';
const app = express();
const PORT = 4000;

// Middleware to authenticate API key
const authenticateAPIKey = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (apiKey === '8456921412c4bce26cd80c11222d38cb06bd6e9228c69ad21de847753d207cc9') {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
 
// Example endpoint
app.get('/api/data', authenticateAPIKey, (req, res) => {
    res.json({ Pbuddy: 'พี่เนเน่',
        ig: '32_nene',
        message: 'ยินดีด้วยที่หาพี่บัดได้ เก่งมากๆเลย ขอต้อนรับสู่สายบัดของเราน้า ไว้เจอกันวันรับน้องนะคับ!!'
     });
});
 
// Start server

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = app;