const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            username: "Miguel",
            age: 22
        }
    ])
});

module.exports = router;