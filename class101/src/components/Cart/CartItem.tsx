import React from 'react';
// import { ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons';
import {
  Card, Image, Typography, Checkbox, Row, Col, InputNumber,
} from 'antd';
import { Product } from '../../types';

const { Title } = Typography;

interface IProps {
    item: Product;
}

const CartItem = ({ item }: IProps) => (
  <Card>
    <Row align="middle">
      <Col span={1}>
        <Checkbox />
      </Col>
      <Col span={4}>
        <Image src={item.coverImage} alt={item.title} height={150} width={150} preview={false} />
      </Col>
      <Col span={10}>
        <Title level={4}>
          {item.title}
        </Title>
      </Col>
      <Col span={3}>
        <Typography>
          {item.price}
          원
        </Typography>
      </Col>
      <Col span={3}>
        <InputNumber min={1} defaultValue={1} />
      </Col>
      <Col span={3}>
        <Typography> 10000원 </Typography>
      </Col>
    </Row>
  </Card>
);

export default CartItem;
