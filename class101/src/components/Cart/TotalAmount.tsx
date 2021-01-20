import React from 'react';
import { Typography } from 'antd';
import { CartItem as ICartItem, Coupon } from '../../types';
import calculateTotal from '../../utils/calculateTotal';

const { Title } = Typography;

interface IProps {
    items: ICartItem[];
    coupon?: Coupon;
  }

const TotalAmount = ({ items, coupon }: IProps) => (
  <Title level={5}>
    결제 금액 :
    {' '}
    {calculateTotal(items, coupon)}
    원
  </Title>
);

export default TotalAmount;
