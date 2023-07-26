import { useEffect } from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
  // Change title of the pages
  useEffect(() => {
    document.title = "Pages Not Found";
  }, []);

  return (
    <>
      <Navbar />
      <section className="container">
        <h1>404 : Pages Not Found</h1>
      </section>
    </>
  );
};

export default NotFound;
