import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID HRQlglLSQCKJKZ5da0GzIGC8UQReoCtCVmTy7q-Kqg8'
  }

});
