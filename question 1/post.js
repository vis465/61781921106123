const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const getAccessToken = async () => {
    try {
        const response = await axios.post('http://20.244.56.144/test/auth', {
            "companyName": "Sona College of Technology",
            "clientID": "d6fdeebe-6175-40ff-a667-3361f361fe46",
            "clientSecret": "AJbIoOqqiAtQzSeT",
            "ownerName" : "Vishal V",
            "ownerEmail" : "vishalv.21it@sonatech.ac.in",
            "rollNo": "61781921106123"
        });
        return response.data.access_token;
    } catch (error) {
        console.error("Error fetching access token:", error.message);
        throw new Error("Failed to retrieve access token");
    }
};

app.post('/getProducts', async (req, res) => {
    let data = req.body;
    console.log(data);

    try {
        // Get the access token
        const token = await getAccessToken();

        let headers = {
            "Authorization": `Bearer ${token}`
        };

        let url = `http://20.244.56.144/test/companies/${data.companyname}/categories/${data.categoryname}/products?top=${data.n}&minPrice=${data.minprice}&maxPrice=${data.maxprice}`;
        let response = await axios.get(url, { headers });
        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => console.log("Server is listening on port 3001"));
