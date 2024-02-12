require("dotenv").config();
const express = require("express")
const morgan = require("morgan")
const app = express()


app.use(express.json());

// Get All Locations
// http://localhost:3006/api/v1/location
app.get("/api/v1/location", (req, res) => {
    console.log("Route Handler runs!");
    console.log("Get All Locations");
    res.status(200).json({
        status: "Success!",
        data: {
            locations: ["Pheonix Mall", "Anandha Bhavan", "Potheri Police Station"],
        },
    });
});


// Get Individual Locations
// http://localhost:3006/api/v1/location/{locationid}
app.get("/api/v1/location/:locationid", (req, res) => {
    console.log("Get Individual Locations");
    console.log(req.params);
    res.status(200).json({
        status: "Success!",
        data: {
            locations: ["Pheonix Mall", "Anandha Bhavan", "Potheri Police Station"],
        },
    });
});

// Create a Location
// http://localhost:3006/api/v1/location
app.post("/api/v1/location", (req, res) => {
    console.log("Post Works!");
    console.log("Create Locations");
    console.log(req.body);
        res.status(201).json({
            status: "Success!",
            data: {
                locations: ["Pheonix Mall", "Anandha Bhavan", "Potheri Police Station"],
            },
        });  
});


// Update Location
// http://localhost:3006/api/v1/location/{locationid}
app.put("/api/v1/location/:locationid", (req,res) => {
    console.log(req.params.locationid);
    console.log("Update Location");
    console.log(req.body);
    res.status(200).json({
        status: "Success!",
        data: {
            locations: ["Pheonix Mall", "Anandha Bhavan", "Potheri Police Station"],
        },
    });
});

// Delete Location
// http://localhost:3006/api/v1/location/{locationid}
app.delete("/api/v1/location/:locationid", ( req, res) =>{
    console.log("Delete Location");
    res.status(204).json({
        status: "Success!"
    });
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});

