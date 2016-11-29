import React, { Component } from 'react';
import { connect } from 'react-redux';

function CenterVideo(props){

    let src=`https://www.youtube.com/embed/${props.centerVideo.id}`

    return(
      <div className="center-video">
        <iframe src={src}> </iframe>
        <br />
        <h2>{props.centerVideo.title}</h2>
      </div>
    )

}

function mapStateToProps(state){
  return {centerVideo: state.centerVideo}
}

export default connect(mapStateToProps)(CenterVideo);