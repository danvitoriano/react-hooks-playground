import React from "react";

export default (props) => {
    return (
        <div className="card mx-3 my-3" style={{ width: "18rem" }}>
            <div class="card-header">{props.title}</div>
            <div className="card-body">
                {props.comp}
                <hr />
                <h5 className="card-title">{props.main}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
};
