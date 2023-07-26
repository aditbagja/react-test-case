import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography } from "antd";
import axios from "axios";
import SimpleDateTime from "react-simple-timestamp-to-date";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const { Title, Text, Paragraph } = Typography;

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
    document.title = `${id}`;
  }, [id]);

  // Filtering data from API for detail pages
  const filtered = news.filter((article) => {
    return article["title"] === id;
  });

  return (
    <>
      <Navbar />
      <section>
        <Title>{id}</Title>
        <div className="container">
          {/* Showing data from filtered data */}
          {filtered.map((item, index) => (
            <div key={index}>
              <div className="wrapper-description">
                <Text type="secondary">
                  <SimpleDateTime
                    dateSeparator="-"
                    timeSeparator=":"
                    format="YMD">
                    {item["publishedAt"]}
                  </SimpleDateTime>
                </Text>
                <Text type="secondary">by. {item["author"]}</Text>
              </div>
              <div className="container2">
                <img
                  alt={item["title"]}
                  src={item["urlToImage"]}
                  className="img"
                />
                <div className="description">
                  <Title level={5}>{item["description"]}</Title>
                  <Paragraph>{item["content"]}</Paragraph>
                  <a href={item["url"]} target="_blank">
                    Read More..
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Detail;
