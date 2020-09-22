import React from "react";

export default ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
