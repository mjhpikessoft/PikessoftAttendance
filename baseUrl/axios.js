import axios from 'axios';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11amFoaWQuYWxpQHBpa2Vzc29mdC5jb20iLCJpZCI6MywiaWF0IjoxNjM5MTE4MDcxfQ.J17a3ON6gzoAQ5qBbltvAiHiLI6o2GyokDh8qTbf2qU';
export default axios.create({
  baseURL: 'https://05e3-39-45-225-36.ngrok.io',
  headers: {
    'Content-Type': 'application/json',
    // authorization: `Bearer ${token}`,
  },
});
