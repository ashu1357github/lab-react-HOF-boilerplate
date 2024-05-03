import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  renderItems() {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <div key={item.id}>
        <li>
          <p>Id: {item.id}</p>
          <p>Name : {item.name}</p>
          <p>User Type: {item.user_type}</p>
        </li>
      </div>
    ));
    return mapRows;
  }

  renderByType = () => {
    const data = this.state.userData;
    const filterByType = data
      .filter((item) => {
        return item.user_type === "Designer";
      })
      .map((item) => (
        <div key={item.id}>
          <li>
            <p>Id: {item.id}</p>
            <p>Name : {item.name}</p>
            <p>User Type: {item.user_type}</p>
          </li>
        </div>
      ));

    return filterByType;
  };

  renderByJ = () => {
    const data = this.state.userData;
    const filterByJ = data
      .filter((item) => {
        return item.name[0] === "J";
      })
      .map((item) => (
        <div key={item.id}>
          <li>
            <p>Id: {item.id}</p>
            <p>Name : {item.name}</p>
            <p>User Type: {item.user_type}</p>
          </li>
        </div>
      ));

    return filterByJ;
  };

  renderByAge = () => {
    const data = this.state.userData;
    const filterByAge = data
      .filter((item) => {
        if (item.age <= 50 && item.age > 28) {
          return item;
        }
      })
      .map((item) => (
        <div key={item.id}>
          <li>
            <p>Id: {item.id}</p>
            <p>Name : {item.name}</p>
            <p>User Type: {item.user_type}</p>
          </li>
        </div>
      ));

    return filterByAge;
  };

  renderYears = () => {
    const data = this.state.userData;
    const reducedByYears = data.reduce((accumilator, currentValue) => {
      if (currentValue.user_type === "Designer") {
        accumilator += currentValue.years;
      }

      return accumilator;
    }, 0);

    return reducedByYears;
  };

  render() {
    return (
      <div>
        <div>
          <h1>Display all items</h1>
          <div>
            <ul>{this.renderItems()} </ul>
          </div>
        </div>

        <div>
          <h1>Display based on user type</h1>
          <div>
            <ul>{this.renderByType()} </ul>
          </div>
        </div>

        <div>
          <h1>Filter all data starting with letter J </h1>
          <div>
            <ul>{this.renderByJ()} </ul>
          </div>
        </div>

        <div>
          <h1>
            Filter all data based on age greater than 28 and age less than or
            equal to 50
          </h1>
          <div>
            <ul>{this.renderByAge()} </ul>
          </div>
        </div>

        <div>
          <h1>Find the total years of the designers </h1>
          <div>
            <ul>{this.renderYears()} </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HigherOrderComponent;