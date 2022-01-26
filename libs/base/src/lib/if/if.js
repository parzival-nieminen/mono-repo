export const If = ({cond, children, ...props}) => {
  if (cond && Array.isArray(children)) {
    children = children?.filter(it => it?.type?.name !== "Else");
  } else {
    if (Array.isArray(children)) {
      children = children?.filter(it => it?.type?.name === "Else");
    }
  }
  return <div {...props}>{children}</div>
}
export default If;
