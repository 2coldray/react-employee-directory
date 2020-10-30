import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    search: "",
    users: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=10"
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          users: response.data.results,
        });
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 text-center">
            <form>
              <div className="form-group">
                <input
                  type="search"
                  className="form-control text-center"
                  id="exampleInputSearch"
                  name="search"
                  placeholder="search"
                  value={this.state.search}
                  onChange={this.handleInputChange}
                />
              </div>
            </form>
          </div>
          <div className="col-sm-3"></div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.id.value}>
                    <td>{user.id.value} </td>
                    <td>
                      <img src={user.picture.thumbnail} alt={user.name.first} />
                    </td>
                    <td>{user.name.first}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.dob.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
