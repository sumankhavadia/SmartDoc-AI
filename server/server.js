const express = require('express');
const cors = require('cors');
const pdfRoutes = require('./routes/pdfRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// PDF upload route
app.use('/api/pdf', pdfRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
