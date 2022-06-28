import { Button, Card, Cascader, Col, DatePicker, Form, Input, InputNumber, Row, Select, TimePicker } from 'antd';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import DishsList from '../../components/Menu/DishsList';
import { DishInfo } from '../../interface';
import './MenuPage.css'

interface Option {
  value: string;
  label: string;
}


const DISHS:DishInfo[] = [
  {
    id: 'dish001',
    image: 'https://www.sashimihome.com/wp-content/uploads/Oshizushi-sushi-sushi-nh%E1%BA%ADt-l%C3%A0-g%C3%AC.jpg',
    name: '押し寿司',
    price: 2.00,
    description: '握り寿司とは異なり、おしずしの上部は薄くて乾燥した食べ物に配置されます。 おしずしは、テーブルに持っていくとチェス盤のような美しい色合いで、からしと濃い醤油を添えると美味しく召し上がれます。 ',
  },
  {
    id: 'dish002',
    image: 'https://www.sashimihome.com/wp-content/uploads/Gunkan-Sushi.jpg',
    name: '軍艦',
    price: 2.40,
    description: '軍艦は「戦艦」、「軍艦」を意味します。また、それ自体が魚の卵、エビの卵、魚の卵で満たされた小さなボートのように見えるため、歴史的な出来事や船に関連付けられているわけでもありません。卵は料理をより魅力的にし、特に魚卵の栄養価が高いため、軍艦寿司は非常に栄養価の高い料理になります。 ',
  },
  {
    id: 'dish003',
    image: 'https://www.sashimihome.com/wp-content/uploads/maki-sushi-l%C3%A0-g%C3%AC.jpg',
    name: '巻き寿司',
    price: 3.05,
    description: '日本語で「巻き」という言葉は「巻き」を意味するので、巻き寿司は「巻き寿司」を意味します。 このタイプの寿司は、海苔の上に寿司飯を敷き、その上にシーフードや野菜を重ねて巻いて作られています。 寿司は一口大にカットされます。',
  },
  {
    id: 'dish004',
    image: 'https://www.menufood.net/wp-content/uploads/2019/03/Uramaki-with-shrimp-and-avocado.jpg',
    name: 'うらまき',
    price: 2.25,
    description: 'また巻き寿司ですが、これは「裏返し」という点で特別です。 他の巻き寿司の外側に海苔の葉があり、内側にご飯がある場合は、裏巻きが反対で、外側にご飯、海苔と肉、魚、野菜が入っています。',
  },
  {
    id: 'dish005',
    image: 'https://nadasan.ro/wp-content/uploads/2021/01/Sushi-NIGIRI-1.png',
    name: '握り寿司',
    price: 1.85,
    description: '簡単に言えば、握りは長くてやや細身の寿司ボールで、わさびの層で広げられ、生の魚や他の魚介類の層で覆われています。 日本語で握りは「絞る」、「圧縮する」という意味で、握り寿司の作り方でもあります。',
  },
  {
    id: 'dish006',
    image: 'https://sudachirecipes.com/wp-content/uploads/2022/02/chirashizushi-13.jpg',
    name: 'ちらし寿司',
    price: 2.00,
    description: 'ちらし寿司は、お椀にご飯を入れ、下にご飯をのせ、その上にスパイシーな味噌ソースをかけた具材（刺身、野菜）をのせて、料理と味わいをより魅力的にします。抵抗するのは難しい。',
  },
  {
    id: 'dish007',
    image: 'https://media.istockphoto.com/photos/japanese-food-ball-shaped-sushi-temarizushi-picture-id1137715869?k=20&m=1137715869&s=612x612&w=0&h=WmCo8r1zuF0tRrsDL5zoxum6EbvfQo1jUSf9WWaaQrM=',
    name: 'てまり寿司',
    price: 2.60,
    description: '手まりは文字通り「ハンドボール」を意味し、手まりは小さなボールのように丸く、お好みのさまざまなトッピングをトッピングします。 しかし、このタイプの寿司は日本の女の子の休日であるひな祭りで非常に人気があるため、美しくてかわいいように装飾されていることがよくあります。',
  },
  {
    id: 'dish008',
    image: 'https://www.mizkan.co.jp/image.jsp?id=18100',
    name: '手巻き寿司',
    price: 3.00,
    description: 'マキは巻き寿司を指し、テマキも例外ではありません。 ただし、ここでのわずかな違いは、テマキが漏斗状で、最後にわずかに巻かれ、内部にご飯が入っており、鮭、鮭の卵、野菜などのさまざまなトッピングで覆われていることです。',
  },
];

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
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

const options: Option[] = [
  {
    value: 'tang',
    label: '弥増す',
  },
  {
    value: 'giam',
    label: '薄れる',
  },
];

const MenuPage:React.FC = () => {
  const [dishList, setDishList] = useState(DISHS);
  const [form] = Form.useForm();
  const handleSubmitForm = () => {

  }
  const dataCart:DishInfo[] = [];

  const [cart, setCart] = useState(dataCart);

  useEffect(()=>{
      const list = [...DISHS];
      const res = list.map((item)=>{
        return{
          ...item,
          count: 0
        }
      });
      console.log("getData", res);
      setCart(res);
  }, []);
  
  const handleUpdateCart = (value:number, id:string) => {
    const data = [...cart];
    const res = data.map(item => {
      if(item.id === id){
        return{
          ...item,
          count: value
        }
      }
      else return{...item};
    })
    setCart(res);
    console.log("update",res);
  }

  const onFinish = (values: any) => {
    console.log(values);
  };

  const getTotal = () => {
    var sum = 0;
    cart.forEach((item) => {
      if (item.count)
        sum += item.count * item.price;
    });
    return sum*1000;
  }

  const onChange2 = (value:string) => {
      console.log(value);
      const mang = [...dishList];
      if (value === "tang") mang.sort((a:DishInfo, b:DishInfo) => a.price - b.price);
      else mang.sort((a:DishInfo, b:DishInfo) => b.price - a.price);
      setDishList(mang);
  }
  
  return (
    <React.Fragment>
        <h2 className="menu-page__ttl-border">
          <span className="menu-page__ttl-en">GRAND MENU</span>
          <span className="menu-page__ttl-jp">HAMI寿司のグランドメニュー</span>
        </h2>
      <div className="menu-page">
        <div className="user-page__filter">
            <Form
                className="user-page__list-filter"
                colon={false}
                form={form}
                onFinish={handleSubmitForm}
            >
                <Row justify={"space-between"}>
                    <p className="user-page__filter-content" style={{fontWeight:"bold"}}>Filter</p>
                    <Col><Row justify={"start"}>
                      <Col>
                        <Form.Item label="料理の名前" name="name" className="form-item" style={{padding:"0px 10px",fontWeight:"bold"}}>
                            <Input placeholder="" className="input-item" style={{width:"250px"}}/>
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item label="価格" name="applications" className="form-item" style={{padding:"0px 10px",fontWeight:"bold"}}>
                        <Select options={options} onChange={onChange2} placeholder="please select" style={{width:"250px", padding:"0px 0px",fontWeight:"lighter"}}/>
                        </Form.Item>
                      </Col>
                      </Row></Col>
                    <Col><Row justify={"start"}>
                      <Col>
                        <Form.Item>
                            <Button
                                style={{
                                    marginLeft: '12px',
                                    marginRight: '12px'
                                }}
                                onClick={() => {
                                    form.resetFields();
                                    window.location.reload();

                                }}
                                className="button basic"
                            >
                                削除
                            </Button>
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="button primary">検索</Button>
                        </Form.Item>
                    </Col>
                    </Row></Col>
                </Row>
            </Form>
        </div>
        <DishsList 
          items = {dishList}
          funct = {handleUpdateCart}
        />
      </div>
      <Card 
        hoverable
        style={{ width: "70%", margin:"0 auto", backgroundColor:"#f9e6e6", borderRadius:"15px", marginBottom:"80px", marginTop:"50px", paddingRight:"50px"}}
        title={<h2 style={{color:"#f53737", fontWeight:"700", textAlign:"center", fontSize:"1.5rem"}}>注文情報</h2>}
        className="card-thanhtoan"
      >
        <Row justify='space-between'>
          <Col span={15}>
            <Form style={{marginLeft:"120px"}} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} labelAlign="left">
                <Form.Item colon={false} {...layout} name={['order', 'name']} label="名前" 
                    rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item colon={false} {...layout}name={['order', 'email']} label="電話番号" 
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item colon={false} {...layout} name={['order', 'address']} label="住所"
                  rules={[{ required: true }]}  
                >
                  <Input />
                </Form.Item>
                <Form.Item colon={false} {...layout} name={['order', 'note']} label="メッセージ" >
                  <Input.TextArea />
                </Form.Item>
                {/* <Row justify='space-between'>  */}
                <Form.Item colon={false} {...layout} name={['order', 'date-picker']} label="日付"
                  rules={[{ required: true }]}
                >
                  <DatePicker />
                </Form.Item> 
                <Form.Item colon={false} {...layout} name={['order',"time-picker"]} label="時間" 
                  rules={[{ required: true }]}
                >
                  <TimePicker />
                </Form.Item>
                {/* </Row> */}
            </Form>
          </Col>
          <Col span={9}>
            <Row justify='space-between'>
              <Col><p>合計注文価格</p></Col>
              <Col><p>{`${Math.round(getTotal())} 円`}</p></Col>
            </Row>
            <Row justify='space-between'>
              <Col><p>割引</p></Col>
              <Col><p>{`${0} 円`}</p></Col>
            </Row>
            <Row justify='space-between'>
              <Col><p>配送料</p></Col>
              <Col><p>{`${getTotal() === 0 ? 0: 90} 円`}</p></Col>
            </Row>
            <Row justify='space-between'>
              <Col><p>VAT</p></Col>
              <Col><p>{`${Math.round(getTotal()*0.1)} 円`}</p></Col>
            </Row>
            <Row justify='center'>
              <h3 style={{color:"#f53737", fontWeight:"700", textAlign:"center", fontSize:"1.2rem"}}>支払われる合計金額</h3>       
            </Row>
            <Row justify='center'>
              <h3>{`${
                Math.round(getTotal()*1.1 + (getTotal() === 0 ? 0: 90))
                } 円`}</h3>       
            </Row>
            <Row justify='center'>
              <Button type="primary" htmlType="submit" className="menu-page__button-submit">
                  注文する
              </Button>
            </Row>
          </Col>
        </Row>
      </Card>
      <Footer/>
    </React.Fragment>
  );
}

export default MenuPage;
