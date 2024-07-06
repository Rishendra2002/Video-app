import React, { useEffect, useState } from "react";

function Video() {
  
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('videoData.json')
    .then(res => res.json())
    .then(data => setVideos(data))
    .catch(err => console.error(err))
  }, []);


  return (
    <div>
      <div className="container">
        <div className="row">
          {videos.map((video, key) => (
            <div key={key} className="col-md-4 mb-2">
              <a to={`https://youtube.com/watch?v=${video.img_id}`}>
                <div className="card">
                  <img
                    src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`}
                    alt={video.title}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{video.title}</h4>
                    <p className="card-text">{video.channelName}</p>
                    <p className="card-text">
                      {video.viewsCount} views - {video.duration}m
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video;