import React from "react";

export default ({ children, ...props }) => {
  return <button className="btn btn-primary mx-1" {...props}>{children}</button>;
};
