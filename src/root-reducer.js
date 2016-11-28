import { combineReducers } from 'redux'

function reducer(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      return takeVideos(action.payload) 

    // case "SWAP_VIDEOS""
    //   return {action.payload}
    default:
      return state
  }
}



const rootReducer = combineReducers({reducer})
export default rootReducer





function takeVideos(videos_APIdata){
  
  let main = videos_APIdata.items[0]
  let related = []
  // debugger
    videos_APIdata.items.forEach(function(vid){
      related.push(vid)
    })
    related.shift()

  return { mainVideo: main, relatedVideos: related }
  
}


