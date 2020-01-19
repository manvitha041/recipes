import React, { Component } from "react";
import axios from "axios";

export class RecipeDetail extends Component {
  state = {
    name: "",
    ingredients: [],
    prepTime: "",
    numberOfServing: "",
    image: "",
    id: "",
    nutrition: []
  };
  componentDidMount() {
      axios
        .get(
          `https://raw.githubusercontent.com/sp2013hem/recipes/master/items/${this.props.match.params.id}.json`
        )
        .then(res => {
          this.setState({
            name: res.data.name,
            ingredients: res.data.ingredientLines,
            prepTime: res.data.totalTime,
            numberOfServing: res.data.numberOfServings,
            image: res.data.images[0].hostedLargeUrl,
            id: res.data.id,
            nutrition: res.data.nutritionEstimates
          });
        });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-6 col-lg-8">
            <h1 className="recipe-name">{this.state.name}</h1>
            <div className="recipe-time">
              <span className="time-pro">
                <i className="fa fa-clock-o"></i>
                {this.state.prepTime}
              </span>
              <span className="time-pro">
                Servings : {this.state.numberOfServing}
              </span>
            </div>
            <img className="recipe-image" src={this.state.image} alt=""></img>
            <div className="recipe-ingredients">
              <h2>Ingredients</h2>
              <ul className="number-ingredients">
                {this.state.ingredients.map((d, i) => {
                  return <li key={i}>{d}</li>;
                })}
              </ul>
            </div>
            <div className="nutrition-table">
              <h2>Nutrition Facts</h2>
              <table className="table table-striped table-hover table-dark table-sm">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.nutrition.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          {item.description === null
                            ? item.attribute
                            : item.description}
                        </td>
                        <td>
                          {item.value} {item.unit.pluralAbbreviation}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-sm-3 col-md-6 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default RecipeDetail;
