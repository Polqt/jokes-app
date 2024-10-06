import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;

const API_URL = "https://official-joke-api.appspot.com/jokes";

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {
        type: null,
        setup: null,
        punchline: null,
        id: null,
    });
});

app.get('/jokes', async(req, res) => {
    try {
        const result = await axios.get(`${API_URL}/random`);
        res.render('index', {
            type: result.data.type,
            setup: result.data.setup,
            punchline: result.data.punchline,
            id: result.data.id,
        });
    } catch(error) {
        res.status(404).send({ message: error.message });
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})