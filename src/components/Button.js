import React from "react";

export default ({ children, ...props }) => {
  return <button className="btn btn-primary mx-1 my-2" {...props}>{children}</button>;
};
