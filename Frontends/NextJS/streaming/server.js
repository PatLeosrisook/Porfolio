const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

// Single route to handle multiple API calls
app.get('/api/multiple-data', async (req, res) => {
    let baseUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page="
    let moviePages = []
    for(let i = 1; i <= 3; i ++) {
        // TODO:: load 5 pages of movies for each genre
        moviePages.push(baseUrl + i)
    }
  try {
    // Array to store the results
    const results = [];

    // Fetch data from each API using a for loop
    for (let url of apiUrls) {
        //TODO:: gonna need to add authentication header here
      const response = await fetch(url);
      const data = await response.json();
      results.push(data); // Collect each API response
    }

    // Send the combined results back to the frontend
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from APIs' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});