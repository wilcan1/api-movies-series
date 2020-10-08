import React from "react";

// const moviesData '../data/movies.json';

export default class requestMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    
    fetch("./movies.json")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="load">Chargement de la page SERIES …</div>;
    } else {
      return (
        <div className="cardMedia">
          {items.map((item) => (
            <div key={item.id} className="card shadow mx-3 my-5">
              <h3 className="text-center text-white p-2 bg-dark">
                {item.titleMedia}
              </h3>
              <img src={item.imgMedia} className="imgcard" alt="" />
            </div>
          ))}
        </div>
      );
    }
  }
}
