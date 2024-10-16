const express = require('express');
const router = express.Router();

// Sample item route
router.get('/', (req, res) => {
    res.json([{ id: 1, item: 'Laptop' }, { id: 2, item: 'Mouse' }]);
});

module.exports = router;
