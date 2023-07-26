import { Space, Typography, Card, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const { Title } = Typography;
  const { Meta } = Card;
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  // API consume from env files
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}/everything?q=tech&pageSize=20&apiKey=${process.env.REACT_APP_APIKEY}`
      )
      .then((res) => {
        setNews(res.data.articles);
      });

    // Change title of the pages
    document.title = "React Test Case";
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Title>Top Selected Articles</Title>
        <div className="wrapper">
          {/* Showing all data from API */}
          {news.map((item, index) => (
            <Card
              key={index}
              style={{ width: 240 }}
              cover={<img alt="example" src={item["urlToImage"]} />}>
              <Title level={5}>{item["title"]}</Title>
              <Space direction="vertical" size="large">
                <Meta description={item["description"]} />
                <Button
                  type="primary"
                  onClick={() => navigate(`/article/${item["title"]}`)}>
                  Read More...
                </Button>
              </Space>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
