import React, { Component } from "react";
import axios from "axios";

export class Recipes extends Component {
  state = {
    recipes: []
  };
  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/sp2013hem/1fb0388c2d0933b65472ec8754c52dda/raw/4b55636b22328caff16b278fed16db3d08268f49/recipes.json"
      )
      .then(res => {
        const temp = res.data.map(item => {
          return {
            image: item.image,
            title: item.name,
            url: "#/recipe/" + item.id
          };
        });
        this.setState({
          recipes: temp
        });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
          {this.state.recipes.map((item, index) => {
            return (
              <div key={index} className="col mb-4">
                <a
                  className="card h-100"
                  href={item.url}
                  style={{ minWidth: "300px" }}
                >
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recipes;
