import { bookData } from "../data/data";
import { Link } from "react-router-dom";

//The home page with some info and link to one of the books
const Home = () => {
  return (
    <div className="flex flex-col items-center m-4 text-center">
      <h1 className="text-4xl font-bold py-4">Welcome To IBook Online</h1>
      <p className="text-lg py-4">
        On this site we have multiple books that can be purchase and sent to you
        in a click of a button
      </p>
      <h2 className="text-2xl py-4">
        Our best seller{" "}
        <span className="font-bold">IT STARTS WITH US: A NOVEL</span> written by
        Colleen Hoover is now avaliable
      </h2>
      <Link to={`/products/1`}>
        <img
          src={bookData[0].imgURL}
          alt={bookData[0].title}
          className="max-w-sm py-4 hover:shadow-2xl ease-in duration-200"
        />
      </Link>
      <figcaption className="mt-2 text-sm">By {bookData[0].author}</figcaption>
    </div>
  );
};

export default Home;
