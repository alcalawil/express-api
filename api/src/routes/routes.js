const express = require('express');
const router = express.Router();

router.post('/text-analyzer', (req, res) => {
    const inputText = req.body.text;
    if (!inputText) {
        return res.status(400).json({
            error: "Undefined text"
        });
    }
    res.status(201).json({
        text: inputText
    });
});

module.exports = router;