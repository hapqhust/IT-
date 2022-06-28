import { Button, Col, DatePicker, Form, Image, Input, InputNumber, Row, Select, TimePicker } from 'antd';
import React from 'react';
import './ReserPage.css'
import picture from '../../assets/image/booking/khong_gian_nha_hang-1.jpg'
import Footer from '../../components/Footer';
import logo from '../../assets/image/logo.png'

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
    console.log(values);
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
          <div className="form__input">
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
              <Form.Item name={['user', 'name']} label="名前" 
              // rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'email']} label="電話番号" >
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'date-picker']} label="日付">
                <DatePicker />
              </Form.Item> 
              <Form.Item name={['user',"time-picker"]} label="時間" >
                <TimePicker />
              </Form.Item>
              <Form.Item label="ベースを選択">
                <Select>
                  <Select.Option value="place1">51A Hồ Tùng Mậu, Hà Nội</Select.Option>
                  <Select.Option value="place1">125 Trần Đại Nghĩa, Hà Nội</Select.Option>
                  <Select.Option value="place1">134 Tô Hiệu, Hà Nội</Select.Option>
                </Select>
            </Form.Item>
              <Form.Item name={['user', 'people']} label="人数" rules={[{ type: 'number', min: 0, max: 20 }]}>
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
          </div>
        </Col>
        </Row>
        <img src={logo} alt="" style={{display:"block", margin:"80px auto -50px"}}/>
      </div>
      <Footer/>
    </React.Fragment>
  );
};


export default ReserPage;