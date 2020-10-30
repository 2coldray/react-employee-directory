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
                            <label htmlFor="exampleInputSearch">Search</label>
                            <input
                                type="search"
                                className="form-control"
                                id="exampleInputSearch"
                                name="search"
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
                        <p className="text-center">This is where the table should go.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;