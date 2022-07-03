import { Button, Card, Col, DatePicker, Form, Image, Input, InputNumber, Row, Select, TimePicker } from 'antd';
import React from 'react';
import './ReserPage.css'
import picture from '../../assets/image/booking/khong_gian_nha_hang-1.jpg'
import Footer from '../../components/Footer';
import logo from '../../assets/image/logo.png'
import { pushNotification } from '../../common/notification';
import { NOTIFICATION_TYPE } from '../../const/notification';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 13 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const ReserPage: React.FC = () => {
  const onFinish = (values: any) => {
    pushNotification("SUCCESSFUL", "注文が成功してしました。", NOTIFICATION_TYPE.SUCCESS);
  };
  const onFinishFailed = (values: any) => {
    pushNotification("ERROR", "あなたはすべての情報を記入する必要があります", NOTIFICATION_TYPE.ERROR);
  };

  return (
    <React.Fragment>
      <div className='reser-page'>
        <h2 className="reser-page__ttl-border">
          <span className="reser-page__ttl-en">MAKE A REVERSATION</span>
          <span className="reser-page__ttl-jp">HAMI寿司の予約</span>
        </h2>
        <Row>
        <Col span={14}>
          <div className="form__image">
            <img src={picture} alt="" className='headline__secondary'/>
          </div>
        </Col>
        <Col span={10}>
        <Card 
          hoverable
          style={{ width: "90%", margin:"0px auto", backgroundColor:"#f9e6e6", borderRadius:"15px", paddingTop:'10px'}}
          className="card-thanhtoan"
        >
            <Form {...layout} name="nest-messages" onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages}>
              <Form.Item name={['user', 'name']} label="名前" 
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'email']} label="電話番号" 
                rules={[{ required: true }]}
                >
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'date-picker']} label="日付"
                rules={[{ required: true }]}
                >
                <DatePicker />
              </Form.Item> 
              <Form.Item name={['user',"time-picker"]} label="時間" 
                rules={[{ required: true }]}
                >
                <TimePicker />
              </Form.Item>
              <Form.Item label="ベースを選択"
                rules={[{ required: true }]}
              >
                <Select>
                  <Select.Option value="place1">51A Hồ Tùng Mậu, Hà Nội</Select.Option>
                  <Select.Option value="place1">125 Trần Đại Nghĩa, Hà Nội</Select.Option>
                  <Select.Option value="place1">134 Tô Hiệu, Hà Nội</Select.Option>
                </Select>
            </Form.Item>
              <Form.Item name={['user', 'people']} label="人数" rules={[{  required: true, type: 'number', min: 0, max: 20 }]}>
                <InputNumber min={1} max={20} />
              </Form.Item>
              <Form.Item name={['user', 'note']} label="メッセージ" >
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" className="reser-page__button-submit">
                  予約する
                </Button>
              </Form.Item>
            </Form>
          </Card> 
        </Col>
        </Row>
        <img src={logo} alt="" style={{display:"block", margin:"80px auto -50px"}}/>
      </div>
      <Footer/>
    </React.Fragment>
  );
};


export default ReserPage;