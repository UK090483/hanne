import * as React from "react";

interface IGridItemProps {
  className?: string;
}

const GridItem: React.FunctionComponent<IGridItemProps> = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

export default GridItem;
