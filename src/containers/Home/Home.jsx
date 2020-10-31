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
        "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=10&nat=us"
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

  sortTable(n) {
    var table;
    table = document.getElementById("table");
    var rows,
      i,
      x,
      y,
      count = 0;
    var switching = true;

    // Order is set as ascending
    var direction = "ascending";

    // Run loop until no switching is needed
    while (switching) {
      switching = false;
      var rows = table.rows;

      //Loop to go through all rows
      for (i = 1; i < rows.length - 1; i++) {
        var Switch = false;

        // Fetch 2 elements that need to be compared
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        // Check the direction of order
        if (direction === "ascending") {
          // Check if 2 rows need to be switched
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If yes, mark Switch as needed and break loop
            Switch = true;
            break;
          }
        } else if (direction === "descending") {
          // Check direction
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If yes, mark Switch as needed and break loop
            Switch = true;
            break;
          }
        }
      }
      if (Switch) {
        // Function to switch rows and mark switch as completed
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;

        // Increase count for each switch
        count++;
      } else {
        // Run while loop again for descending order
        if (count === 0 && direction === "ascending") {
          direction = "descending";
          switching = true;
        }
      }
    }
  }

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
            <table className="table table-striped" id="table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    onClick={() => {
                      this.sortTable(0);
                    }}
                  >
                    Name
                  </th>
                  <th scope="col">Image</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                  <th scope="col">ID</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.id.value}>
                    <td>{user.name.first}</td>
                    <td>
                      <img src={user.picture.thumbnail} alt={user.name.first} />
                    </td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.dob.date}</td>
                    <td>{user.id.value} </td>
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
