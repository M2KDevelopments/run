const express = require('express');
const cron = require('node-cron');
const app = express();

cron.schedule('* * * * * ', () => {
    console.log('Running Every Minute')
});

app.use(express.json());

app.listen(3000, () => console.log('Running on port 3000!'));