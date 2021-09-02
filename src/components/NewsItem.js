import React from "react";

const NewsItem = (props) => {
  let {
    title,
    description,
    imgUrl,
    newsUrl,
    author,
    date,
    source,
    batchColor,
  } = props;

  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
          }
          className="card-img-top"
          alt="..."
          style={{ height: "20rem", width: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}{" "}
            <span
              className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${batchColor}`}
            >
              {source}
            </span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
