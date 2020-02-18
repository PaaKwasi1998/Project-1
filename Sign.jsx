import React, { Component } from "react";
import MainNavbar from "./MainNavbar";
import { Link } from "react-router-dom";

export default class Sign extends Component {
    render() {
        return (
            <div>
                <MainNavbar />
                <div className="container">
                    <div className="form-position row justify-content-center">
                        <form action="">
                            <div className="form-card">
                                <div className="col-12">
                                    <div className="row">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button type="submit" class="btn btn-success btn-lg  mb-2">
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="row">
                                        <small id="emailHelp" class="form-text text-muted">
                                            <Link to="/register">Click Here to Register</Link>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
