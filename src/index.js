const express = require("express");
const path = require("path");
const collection  = require("./config");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/submitReview', async (req, res) => {
  try {
    const newReview = await collection.create(req.body);
    console.log('Review submitted successfully:', newReview);
    return res.status(200).json({ message: 'Review submitted successfully' });
  } catch (error) {
    console.error('Error submitting review:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


const port = 9000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});