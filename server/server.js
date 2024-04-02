import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
const app = express();
import ConnectDB from "./db/connect.js"
 import usersRoutes from "./routes/usersRoutes.js"
 import patientRoutes from "./routes/patientsRoutes.js"
import ManufacturerRoutes from './routes/ManufacturerRoutes.js'
import vaccintationsRoutes from "./routes/vaccinationsRoutes.js"
import bodyParser from 'body-parser';

app.use(bodyParser.json());

app.use(cors())
app.use(express.json())

app.get("/api/v1", (req, res) => {
    res.json({ msg: "welcome to API" });
});
app.use("/api/v1/users", usersRoutes)
app.use("/api/v1/patients",patientRoutes)
app.use("/api/v1/vaccinations",vaccintationsRoutes)
app.use("/api/v1/Manufacturers",ManufacturerRoutes)



app.get("*", function (req, res) {
    res.send("hello");
});


const port = process.env.PORT || 5000;
const start = async () => {
    try {
      await ConnectDB.connect()
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
