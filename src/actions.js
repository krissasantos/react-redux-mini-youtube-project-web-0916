import axios from 'axios'
const API_KEY = 'AIzaSyDJBjY4UqxuyyIDEFcAsBCwfyJcoz5Eixw'
// const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

export function fetchVideos(searchTerm){
  debugger
  const videos = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${API_KEY}`)
  console.log(videos)
  return {
    type: "FETCH_VIDEOS",
    payload: videos
  }
}

// export default fetchVideos
