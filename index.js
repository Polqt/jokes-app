import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;

const API_URL = "https://api.humorapi.com/jokes/random";
const apiKey = "d2b9afca979e432187a5c7ac238a31f9";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/jokes', async(req, res) => {
    try {
        const result = await axios.get()

    } catch(error) {
        res.status(404).send({ message: error.message });
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})