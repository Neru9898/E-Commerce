import { bookData } from "../data/data";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welcome To IBook Online</h1>
      <p>
        On this site we have multiple books that can be purchase and sent to you
        in a click of the button
      </p>
      <h3>
        Our best seller is <span>IT STARTS WITH US: A NOVEL</span> written by
        Colleen Hoover
      </h3>
      <Link to={`/products/1`}>
        <img src={bookData[0].imgURL} />
      </Link>
    </div>
  );
};

export default Home;
