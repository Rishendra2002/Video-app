import React, { useEffect, useState } from "react";

function NewsComponent() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8181e86c756840bc945d0cea96b77073')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
            {
                news.map((value, key) => (
                    <div key={key} className="col-2">
                        <a href={value.url}>
                            <div className="card">
                                <img src={value.urlToImage} alt={value.title}/>
                                <div className="card-body">
                                    <h4 className="card-title">{value.author}</h4>
                                    <p className="card-text">{value.title}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;