import { Card } from "antd";
import React from "react";
import {DishInfo} from '../../../interface'
import DishItem from "../DishItem";
import './DishsList.css'

interface Props{
  items: DishInfo[];
}

const DishsList:React.FC<Props> = (props) => {
  const {items} = props;
    if (items.length === 0) {
      return (
        <div className="center">
          <Card>
            <h2>No dish found.</h2>
          </Card>
        </div>
      );
    }
  
    return (
      <ul className="dishs-list">
        {props.items.map(monan => (
          <DishItem itemDish = {monan}
          />
        ))}
      </ul>
    );
  };
  
  export default DishsList;