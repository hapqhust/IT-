import { Card } from "antd";
import React from "react";
import {DishInfo} from '../../../interface'
import DishItem from "../DishItem";
import './DishsList.css'

interface Props{
  items: DishInfo[];
  funct: (value:number, id:string) => void;
}

const DishsList:React.FC<Props> = ({items, funct}) => {
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
        {items.map(monan => (
          <DishItem 
            itemDish = {monan}
            funct = {funct}
          />
        ))}
      </ul>
    );
  };
  
  export default DishsList;