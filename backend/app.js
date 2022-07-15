const express = require('express');
const cors = require('cors');
const multer = require('multer');
const sharp = require('sharp');

const app = express()
app.use(cors())
const PORT = 3050;

const helperImg = (filePath, fileName, size = 300) => {
    return sharp(filePath)
        .resize(size)
        .toFile(`./optimize/${fileName}.png`)
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads') //imagen cruda
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res) => {
    //console.log('--->', req.file)
    helperImg(req.file.path, `micro-resize-${req.file.fieldname}`, 20)
    helperImg(req.file.path, `small-resize-${req.file.fieldname}`, 100)
    helperImg(req.file.path, `medium-resize-${req.file.fieldname}`, 500)
    helperImg(req.file.path, `large-resize-${req.file.fieldname}`, 1000)
    res.send({data: 'Imagen cargada'})
})

app.listen(PORT, () => {
    console.log('Servidor ', PORT)
})