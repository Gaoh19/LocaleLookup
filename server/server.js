require("dotenv").config();
const express = require("express");
const db = require("./db");

const morgan = require("morgan");
const app = express();


app.use(express.json());

// Get All Locations
// http://localhost:3006/api/v1/location
app.get("/api/v1/location", async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM locations");
        console.log(results);
        console.log("Get All Locations");
        res.status(200).json({
            status: "Success!",
            results: results.rows.length,
            data: {
                locations: results.rows
            },
        });

    } catch(err){
        console.log(err);
    }
    
});


// Get Individual Locations
// http://localhost:3006/api/v1/location/{locationid}
app.get("/api/v1/location/:locationid", async (req, res) => {
    console.log("Get Individual Locations");
    console.log(req.params.locationid);
    try{
        const result = await db.query("SELECT * FROM locations where id = $1", [
            req.params.locationid,
        ]);
        res.status(200).json({
            status: "Success!",
            data: {
                location: result.rows[0],
            },
        });

    } catch(err){
        console.log(err);
    }
});

// Create a Location
// http://localhost:3006/api/v1/location
app.post("/api/v1/location", async (req, res) => {
    console.log("Create Locations");
    console.log(req.body);
    try{
        const result = await db.query("INSERT INTO locations (name, address, priceRange) values ($1, $2, $3) returning *", [
            req.body.name,
            req.body.address,
            req.body.priceRange
        ])
        console.log(result);
        res.status(201).json({
            status: "Success!",
            data: {
                locations: result.rows[0],
            },
        });

    } catch(err){
        console.log(err);
    }
          
});


// Update Location
// http://localhost:3006/api/v1/location/{locationid}
app.put("/api/v1/location/:locationid", async(req,res) => {
    try{
        const result = await db.query("UPDATE locations SET name = $1, address = $2, priceRange = $3 where id = $4 returning *",
        [
            req.body.name,
            req.body.address,
            req.body.priceRange,
            req.params.locationid
        ]);
        console.log(result);
        res.status(200).json({
            status: "Success!",
            data: {
                locations: result.rows[0],
            },
        });

    } catch(err){
        console.log(err);
    }
    console.log(req.params.locationid);
    console.log("Update Location");
    console.log(req.body);
    
});

// Delete Location
// http://localhost:3006/api/v1/location/{locationid}
app.delete("/api/v1/location/:locationid", async( req, res) =>{
    try{
        const result = await db.query("DELETE FROM locations where id = $1", [req.params.locationid]);
        res.status(204).json({
            status: "Success!"
        });

    } catch(err){
        console.log(err);
    }
    console.log("Delete Location");
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});

