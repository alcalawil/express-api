const express = require('express');
const router = express.Router();

router.post('/text-analyzer', (req, res) => {
    const inputText = req.body.text;
    res.status(200).json({
        text: inputText
    });
});

module.exports = router;