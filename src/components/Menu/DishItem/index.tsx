import { Avatar, Card } from "antd";
import React from "react";
import { DishInfo } from "../../../interface";
import './DishItem.css'

const { Meta } = Card;

interface Props{
    itemDish: DishInfo;
}

const DishItem:React.FC<Props> = (props) => {
    const {itemDish} = props;
    return(
        <li className="dish-item">
            <Card
                hoverable
                style={{ width: 300}}
                cover={
                <img
                    alt={itemDish.name}
                    src={itemDish.image}
                />
                }
                // actions={[
                // <SettingOutlined key="setting" />,
                // <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
                // ]}
            >
                <Meta
                title={itemDish.name}
                description={itemDish.description}
                />
            </Card>
        {/* <Card className="user-item__content">
          <Link to={`/${props.id}/places`}>
            <div className="user-item__image">
              <img src={detail.image} alt={detail.name} />
            </div>
            <div className="user-item__info">
              <h2>{detail.name}</h2>
              <h3>
                {detail.description}
              </h3>
            </div>
          </Link>
        </Card> */}
      </li>);
}

export default DishItem;