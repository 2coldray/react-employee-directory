import React, { Component } from 'react';


class Home extends Component {
    state = {
        search: ""
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
        
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
                                    <th scope="row">1st Image</th>
                                    <td>Justin</td>
                                    <td>678-434-2334</td>
                                    <td>justin@gmail.com</td>
                                    <td>09-03-1995</td>
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