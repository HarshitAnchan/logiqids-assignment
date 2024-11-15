import React from "react";
import "./NewsPreview.css";

const NewsPreview = ({ newsItem }) => {
  if (!newsItem) return null;

  return (
    <div className="news-preview">
      <img
        src={
          newsItem.urlToImage ||
          "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
        }
        alt={newsItem.title}
        className="preview-image"
      />
      <h2>{newsItem.title}</h2>
      <p className="author-info">
        By {newsItem.author || "unknown"} | {newsItem.source.name}
      </p>
      <p className="preview-content">
        {newsItem.content || newsItem.description}
      </p>
      <a
        href={newsItem.url}
        target="_blank"
        rel="noopener noreferrer"
        className="read-more"
      >
        Read full article
      </a>
    </div>
  );
};

export default NewsPreview;
