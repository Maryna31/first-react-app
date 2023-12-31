import NewsItem from "./components/NewsItem";
import './App.css';

function App() {
  const newsItem = {
    title: 'Some news',
    body: 'About this news',
  };
  return <NewsItem news = {newsItem}/>;
}

export default App;




