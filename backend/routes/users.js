router.get('/', (req, res) => {
    console.log("Users route hit");
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});