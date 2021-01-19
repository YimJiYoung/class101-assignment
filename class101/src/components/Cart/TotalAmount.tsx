import React from 'react';
import { Typography } from 'antd';
import { CartItem as ICartItem, Coupon } from '../../types';

const { Title } = Typography;

interface IProps {
    items: ICartItem[];
    coupon?: Coupon;
  }

const TotalAmount = ({ items, coupon }: IProps) => (
  <Title level={5}>
    결제 금액 :
    {' '}
    {items.reduce((total, item) => total + item.price * item.amount, 0)}
    원
  </Title>
);

export default TotalAmount;
