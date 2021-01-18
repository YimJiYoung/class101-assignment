import React, { useState, Dispatch, SetStateAction } from 'react';
import {
  Card, Image, Typography, Checkbox, Row, Col, InputNumber,
} from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { Product, CartItem as ICartItem } from '../../types';

const { Title } = Typography;

interface IProps {
    item: Product;
    createHandleCheck: (item : ICartItem) => (e: CheckboxChangeEvent) => void;
}

const CartItem = ({ item, createHandleCheck }: IProps) => {
  const [amount, setAmount] = useState(1);

  const handleAmoutChange = (number: number | string | null | undefined) => {
    if (!number) return;
    setAmount(+number);
  };

  const { id, price, availableCoupon } = item;

  const handleCheck = createHandleCheck({
    id, price, availableCoupon, amount,
  });

  return (
    <Card>
      <Row align="middle">
        <Col span={1}>
          <Checkbox onChange={handleCheck} />
        </Col>
        <Col span={4}>
          <Image src={item.coverImage} alt={item.title} height={100} width={100} preview={false} />
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
          <InputNumber min={1} value={amount} onChange={handleAmoutChange} />
        </Col>
        <Col span={3}>
          <Typography>
            {item.price * amount}
            원
          </Typography>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
