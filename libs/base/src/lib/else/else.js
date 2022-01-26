import {Fragment} from "react";

export function Else({children, ...props}) {
  return <Fragment {...props}>{children}</Fragment>
}

export default Else;
