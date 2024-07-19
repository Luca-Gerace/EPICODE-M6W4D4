import express from 'express';

const server = express();

const port = 3001


// Router instance
const router = express.Router();

// CRUD operations
router.get('/', (req, res) => {
    res.send('GET /');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`GET /${id}`);
});

router.post('/', (req, res) => {
    const data = req.body;
    res.send(`POST - ${JSON.stringify(data)}`);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.send(`PUT /${id} - ${JSON.stringify(data)}`);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`DELETE /${id}`);
});

// Middleware
server.use(express.json());

// Router to App
server.use('/', router);

server.listen(port, () => {
    console.log("Server running on port ", port);
})
