import React, { Component } from 'react';
import axios from "axios";


class Home extends Component {
    state = {
        search: "",
        users: []

    };

    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=10").then((response) => {
            console.log(response.data);
            this.setState({
                users: response.data,
            });
        });
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
        
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
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">DOB</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1st Image</td>
                                    <td>Justin</td>
                                    <td>678-434-2334</td>
                                    <td>justin@gmail.com</td>
                                    <td>09-03-1995</td>
                                </tr>
                                <tr>
                                    <td>2nd Image</td>
                                    <td>Grayson</td>
                                    <td>678-534-9878</td>
                                    <td>grayson@gmail.com</td>
                                    <td>08-19-1996</td>
                                </tr>
                                <tr>
                                    <td>3rd Image</td>
                                    <td>Rayshawn</td>
                                    <td>678-212-7865</td>
                                    <td>ray@gmail.com</td>
                                    <td>11-18-1995</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;