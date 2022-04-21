import Navbar from "../components/Navbar";

const announcement_02 = () => {
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

export default announcement_02;