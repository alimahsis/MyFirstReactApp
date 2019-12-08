import React from "react";

function Navbar(props) {
    return (
        <nav className="card-header text-right mt-5">
            <span className="navbar-brand" href="#">
                کالاها
                <span style={{ marginRight: 10 }} className="badge badge-pill badge-dark">
                    {props.totalProduct}
                </span>
            </span>
            <button
                className="btn btn-md btn-primary float-left"
                onClick={() => props.onInsert("Enter title here...", 1)}
                type="button"
                style={{ float: "left" }}
            >
                افزودن کالا
            </button>
        </nav>
    );
}

export default Navbar;
