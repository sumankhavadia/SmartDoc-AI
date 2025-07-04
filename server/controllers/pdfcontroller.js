const fs = require('fs');
const pdfParse = require('pdf-parse');

exports.uploadPDF = async (req, res) => {
    console.log('📥 Received PDF:', req.file);

    const pdfPath = req.file.path;

    try {
        const dataBuffer = fs.readFileSync(pdfPath);
        const pdfData = await pdfParse(dataBuffer);
        fs.unlinkSync(pdfPath); // delete after reading

        res.json({ text: pdfData.text });
    } catch (err) {
        console.error('❌ PDF Parse Error:', err);
        res.status(500).json({ error: 'Failed to parse PDF' });
    }
};
