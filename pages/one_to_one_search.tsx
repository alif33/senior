import Navbar from "../components/Navbar";

const one_to_one_search = () => {
  return (
    <div>
      <Navbar />
      <div className="search-title container">
        <h1>Lorem Ipsum is</h1>
        <p>2022.03.23</p>
      </div>
      <div className="description">
        <p className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati
          architecto ad sunt, aspernatur dolores illo quasi. Assumenda,
        </p>
      </div>
      <div className="container">
        <div className="description-card">
          <div className="heading">
            <h2>ctetur</h2>
            <span>2021.03.23</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            itaque eos ex magnam sapiente
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-6">
            <button>Start</button>
          </div>
          <div className="col-6">
            <button>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default one_to_one_search;
