import React from "react";
import "../css/listCard.css";

interface ListCardProps {
  employeeName: string;
}

const ListCard: React.FC<ListCardProps> = ({ employeeName }) => {
  return (
    <div className="employee-list-wrapper">
      <span>{employeeName}</span>
      <span>delete</span>
    </div>
  );
};

export default ListCard;
