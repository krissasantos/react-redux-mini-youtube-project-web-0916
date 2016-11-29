import { combineReducers } from 'redux'

function reducer(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":

      return action.payload.data.items.map(function(video){
        return { id: video.id.videoID,
        title: video.snippet.title, 
        thumbnail: video.snippet.thumbnails.default.url,
        description: video.snippet.description}
      })

    // case "SWAP_VIDEOS""
    //   return {action.payload}

    default:
      return state
  }
}

const rootReducer = combineReducers({reducer})
export default rootReducer


// function takeVideos(videos_APIdata){
//   debugger
//   let main = videos_APIdata.data.items[0] //object
//   let related = []
//   // debugger
//     videos_APIdata.data.items.forEach(function(vid){
//       related.push(vid)
//     })
//     related.shift()

//   return { mainVideo: main, relatedVideos: related }
  
// }

//______________________________________________________
