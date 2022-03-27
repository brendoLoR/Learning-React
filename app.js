
const axios = require("axios")
const cors = require('cors')

const express = require('express');
const app = express();
app.use(cors())
const api = axios.create({
    baseURL: "https://skillicons.dev"
})


app.get('/dev-icons', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    api.get("/icons?i=git,nodejs,react,php,py,linux,gcp,mysql,postgres").then((response) => {res.send(response.data)}).catch((err) => {
        console.error('erro na requisição' + err)
    })
    // res.send(apiCall())
})
app.listen(3001, () => {
    console.log('listening on port 3001')
})