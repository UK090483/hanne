import * as React from "react";

interface IGridProps {
  className?: string;
}

const Grid: React.FunctionComponent<IGridProps> = (props) => {
  const { className, children } = props;
  return <div className={"grid " + className}>{children}</div>;
};

export default Grid;
