import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import NavInshort from "./components/Navbar";
import NewsContent from "./components/NewsContent/NewsContent";

export default function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState(0);
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("health");

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      );
      setNewsArray(news.data.articles.slice(0, loadMore));
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [category, loadMore]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavInshort setCategory={setCategory} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {newsResults > 0 && (
          <NewsContent
            newsArray={newsArray}
            newsResults={newsResults}
            loadMore={loadMore}
            setLoadMore={setLoadMore}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
