import React from "react";

export default (props) => {
    return (
        <div className="card mx-3 my-3" style={{ width: "30%" }}>
            <div className="card-header">{props.title}</div>
            <div className="card-body">
                {props.comp}
            </div>
        </div>
    );
};
