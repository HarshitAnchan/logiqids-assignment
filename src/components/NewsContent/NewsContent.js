import { Container } from "@mui/material";
import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsPreview from "../NewsPreview";
import "./NewsContent.css";

const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [showMobilePreview, setShowMobilePreview] = useState(false);

  const handlePreviewClick = (newsItem) => {
    setSelectedNews(newsItem);
    if (window.innerWidth <= 768) {
      setShowMobilePreview(true);
    }
  };

  return (
    <Container maxWidth="md">
      <div className={`content ${selectedNews ? "with-preview" : ""}`}>
        <div className="news-list">
          <div className="downloadMessage">
            <span className="downloadText">
              For the best experience use inshorts app on your smartphone
            </span>
            <img
              alt="app store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
            />
            <img
              alt="play store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
            />
          </div>

          {newsArray.map((newsItem) => (
            <div key={newsItem.title} className="news-item-container">
              <NewsCard newsItem={newsItem} />
              <button
                className="preview-button"
                onClick={() => handlePreviewClick(newsItem)}
              >
                Preview
              </button>
            </div>
          ))}

          {loadMore <= newsResults && (
            <>
              <hr />
              <button
                className="loadMore"
                onClick={() => setLoadMore(loadMore + 20)}
              >
                Load More
              </button>
            </>
          )}
        </div>

        {selectedNews && (
          <div className="news-preview-container">
            <NewsPreview newsItem={selectedNews} />
          </div>
        )}
      </div>

      {showMobilePreview && (
        <div
          className="mobile-preview-overlay"
          onClick={() => setShowMobilePreview(false)}
        >
          <div
            className="mobile-preview-content"
            onClick={(e) => e.stopPropagation()}
          >
            <NewsPreview newsItem={selectedNews} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default NewsContent;
