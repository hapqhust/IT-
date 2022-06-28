import { Avatar, Button, Card, Col, InputNumber, Row } from "antd";
import {ShopOutlined} from "@ant-design/icons"
import React from "react";
import { DishInfo } from "../../../interface";
import './DishItem.css'
import { Link } from "react-router-dom";

const { Meta } = Card;

interface Props{
    itemDish: DishInfo;
    funct: (value:number, id:string) => void;
}

const DishItem:React.FC<Props> = (props) => {
    const {itemDish, funct} = props;

    const handleA = (e:number) => {
      funct(e, itemDish.id);
    }
    
    return(
        <li className="dish-item">
            <Card
                hoverable
                style={{ width: 300}}
                cover={
                <img
                    alt={itemDish.name}
                    src={itemDish.image}
                    style={{maxHeight:"200px"}}
                />
                }
                // actions={[
                // <SettingOutlined key="setting" />,
                // <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
                // ]}
            >
                <Meta
                title={
                  <h3 style={{color:"#f53737", fontWeight:"bold", fontSize:"1.2rem", alignItems:"center"}}>
                    {itemDish.name}
                  </h3>
                }
                description={
                  <>
                    <p style={{color:"black", fontWeight:"300"}} className="description">
                        {itemDish.description}
                    </p>
                    <Row justify="space-between">
                      <Col span={12}><p style={{color:"#ed6f00", fontWeight:"600", fontSize:"1rem"}}>
                        {`価格：${itemDish.price*1000} 円`}
                      </p></Col>
                      <Col span={12}>
                        <InputNumber addonBefore={<ShopOutlined style={{color:"#ed6f00"}}/>} style={{ width: '100%', color:"#ed6f00" }} min={0} max={100} defaultValue={0} onChange={handleA}/>
                      </Col>
                    </Row>
                    <Link to={`./${itemDish.id}`}>
                      <Button type="primary" className="dishDetail__button" >
                          <span>↳
                          </span>
                          もっと見る
                      </Button>
                  </Link>
                  </>
                }
                />
            </Card>
      </li>);
}

export default DishItem;