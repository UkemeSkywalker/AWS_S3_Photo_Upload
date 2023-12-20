import exp from "constants";
import express from "express"

const app = express()


const PORT = 5001
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded())


const files = [
    {
      "fileName": "report.pdf",
      "fileType": "document", 
      "fileSize": "2.1 MB",
      "downloadUrl": "https://example.com/files/report.pdf"
    },
    {
      "fileName": "presentation.pptx",
      "fileType": "document",
      "fileSize": "8.4 MB", 
      "downloadUrl": "https://example.com/files/presentation.pptx"
    },
    {
      "fileName": "song.mp3",
      "fileType": "audio",
      "fileSize": "4.5 MB",
      "downloadUrl": "https://example.com/files/song.mp3"  
    },
    {
      "fileName": "tutorial.mp4",
      "fileType": "video",
      "fileSize": "124 MB",
      "downloadUrl": "https://example.com/files/tutorial.mp4"
    },
    {
      "fileName": "report2.pdf",
      "fileType": "document",
      "fileSize": "1.2 MB",
      "downloadUrl": "https://example.com/files/report2.pdf"
    },
    {
      "fileName": "presentation2.pptx", 
      "fileType": "document",
      "fileSize": "6.7 MB",
      "downloadUrl": "https://example.com/files/presentation2.pptx"
    },
    {
      "fileName": "song2.mp3",
      "fileType": "audio",
      "fileSize": "3.1 MB",
      "downloadUrl": "https://example.com/files/song2.mp3"   
    },
    {
      "fileName": "video.avi", 
      "fileType": "video",
      "fileSize": "250 MB",
      "downloadUrl": "https://example.com/files/video.avi"
    },
    {
      "fileName": "ebook.pdf",
      "fileType": "document",
      "fileSize": "5 MB",
      "downloadUrl": "https://example.com/files/ebook.pdf"
    },
    {
      "fileName": "podcast.mp3",
      "fileType": "audio",
      "fileSize": "11 MB",
      "downloadUrl": "https://example.com/files/podcast.mp3"
    }
  ]


// get all files
app.get("/", (req, res) => {
    res.send(files)
})


// upload new file
app.post("/", (req, res) => {
    files.push(req.body)
    res.send(201)
})
