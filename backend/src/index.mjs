import express from "express"

const app = express()


const PORT = 5001
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});


app.get("/", (req, res) => {
    
})

