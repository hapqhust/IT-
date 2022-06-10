import React from 'react'
import Footer from '../../components/Footer';
import DishsList from '../../components/Menu/DishsList';
import { DishInfo } from '../../interface';
import './MenuPage.css'

const MenuPage:React.FC = () => {
  const DISHS:DishInfo[] = [
    {
      id: 'dish001',
      image: 'https://www.sashimihome.com/wp-content/uploads/Oshizushi-sushi-sushi-nh%E1%BA%ADt-l%C3%A0-g%C3%AC.jpg',
      name: '押し寿司',
      description: '握り寿司とは異なり、おしずしの上部は薄くて乾燥した食べ物に配置されます。 おしずしは、テーブルに持っていくとチェス盤のような美しい色合いで、からしと濃い醤油を添えると美味しく召し上がれます。 ',
    },
    {
      id: 'dish002',
      image: 'https://www.sashimihome.com/wp-content/uploads/Gunkan-Sushi.jpg',
      name: '軍艦',
      description: '軍艦は「戦艦」、「軍艦」を意味します。また、それ自体が魚の卵、エビの卵、魚の卵で満たされた小さなボートのように見えるため、歴史的な出来事や船に関連付けられているわけでもありません。卵は料理をより魅力的にし、特に魚卵の栄養価が高いため、軍艦寿司は非常に栄養価の高い料理になります。 ',
    },
    {
      id: 'dish003',
      image: 'https://www.sashimihome.com/wp-content/uploads/maki-sushi-l%C3%A0-g%C3%AC.jpg',
      name: '巻き寿司',
      description: '日本語で「巻き」という言葉は「巻き」を意味するので、巻き寿司は「巻き寿司」を意味します。 このタイプの寿司は、海苔の上に寿司飯を敷き、その上にシーフードや野菜を重ねて巻いて作られています。 寿司は一口大にカットされます。',
    },
    {
      id: 'dish004',
      image: 'https://www.menufood.net/wp-content/uploads/2019/03/Uramaki-with-shrimp-and-avocado.jpg',
      name: 'うらまき',
      description: 'また巻き寿司ですが、これは「裏返し」という点で特別です。 他の巻き寿司の外側に海苔の葉があり、内側にご飯がある場合は、裏巻きが反対で、外側にご飯、海苔と肉、魚、野菜が入っています。',
    },
    {
      id: 'dish005',
      image: 'https://nadasan.ro/wp-content/uploads/2021/01/Sushi-NIGIRI-1.png',
      name: '握り寿司',
      description: '簡単に言えば、握りは長くてやや細身の寿司ボールで、わさびの層で広げられ、生の魚や他の魚介類の層で覆われています。 日本語で握りは「絞る」、「圧縮する」という意味で、握り寿司の作り方でもあります。',
    },
    {
      id: 'dish006',
      image: 'https://sudachirecipes.com/wp-content/uploads/2022/02/chirashizushi-13.jpg',
      name: 'ちらし寿司',
      description: 'ちらし寿司は、お椀にご飯を入れ、下にご飯をのせ、その上にスパイシーな味噌ソースをかけた具材（刺身、野菜）をのせて、料理と味わいをより魅力的にします。抵抗するのは難しい。',
    },
    {
      id: 'dish007',
      image: 'https://media.istockphoto.com/photos/japanese-food-ball-shaped-sushi-temarizushi-picture-id1137715869?k=20&m=1137715869&s=612x612&w=0&h=WmCo8r1zuF0tRrsDL5zoxum6EbvfQo1jUSf9WWaaQrM=',
      name: 'てまり寿司',
      description: '手まりは文字通り「ハンドボール」を意味し、手まりは小さなボールのように丸く、お好みのさまざまなトッピングをトッピングします。 しかし、このタイプの寿司は日本の女の子の休日であるひな祭りで非常に人気があるため、美しくてかわいいように装飾されていることがよくあります。',
    },
    {
      id: 'dish008',
      image: 'https://wiki-travel.com.vn/Uploads/Picture/NguyenBinhVTV-151424111406-temaki.jpg',
      name: '手巻き寿司',
      description: 'マキは巻き寿司を指し、テマキも例外ではありません。 ただし、ここでのわずかな違いは、テマキが漏斗状で、最後にわずかに巻かれ、内部にご飯が入っており、鮭、鮭の卵、野菜などのさまざまなトッピングで覆われていることです。',
    },
  ];
  return (
    <React.Fragment>
      <div className="menu-page">
        <h2 className="menu-page__ttl-border">
          <span className="menu-page__ttl-en">GRAND MENU</span>
          <span className="menu-page__ttl-jp">HAMI寿司のグランドメニュー</span>
        </h2>
        <DishsList items = {DISHS} />
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default MenuPage;