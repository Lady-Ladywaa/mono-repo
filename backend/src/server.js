import express from 'express';
import { users } from './fakeDB/fakeUsers.js';
 
const app = express();

app.use(express.json());

// CRUD route and endpoints
app.use("/api", apiRoutes )

// Centralized/Global Error Handling Middleware
app.use((err, req, res, next) => {
    return res.status(500).json({
    error: "Something went wrong on the server...",
    message: err.message,
    });
});

const PORT = 3001

app.listen(PORT, () => {console.log(`Server is running on PORT ${PORT} 🚀`)  //เป็นฟังชั่นที่เรียนใช้ไป import ในเครื่อง
});