import axios from 'axios';

const KEY = 'AIzaSyB1pcWbEJvBF_YPBE_iEH5OyU3qaMwPaio';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});

