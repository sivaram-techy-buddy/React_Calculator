import React from "react";

interface DisplayProps {
    value: string;
    //onClick: (value: string)=>void;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <div className="display">{value}</div>;
};

export default Display;