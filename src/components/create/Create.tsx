import React, { Fragment } from "react";
import "./Create.css";
import Header from "../header/Header";

const Create = () => {
    return (
        <Fragment>
            <Header />
            <div className="centerDiv">
                <form>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input className="input" type="text" id="name" name="name" defaultValue="John" />
                    <br />
                    <label htmlFor="category">Category</label>
                    <br />
                    <input className="input" type="text" id="category" name="category" defaultValue="John" />
                    <br />
                    <label htmlFor="price">Price</label>
                    <br />
                    <input className="input" type="number" id="price" name="price" />
                    <br />
                </form>
                <br />
                <img alt="Posts" width="200px" height="200px" src="" />
                <form>
                    <br />
                    <input type="file" />
                    <br />
                    <button type="submit" className="uploadBtn">
                        Upload and Submit
                    </button>
                </form>
            </div>
        </Fragment>
    );
};

export default Create;