import React from 'react';
import { Typography } from 'antd';
import { CartItem as ICartItem, Coupon } from '../../types';

const { Title } = Typography;

interface IProps {
    items: ICartItem[];
    coupon?: Coupon;
  }

const TotalAmount = ({ items, coupon }: IProps) => {
  const calculateTotalAmount = (): number => {
    const totalAmount = items.reduce((total, item) => total + item.price * item.amount, 0);
    if (!coupon) return totalAmount;
    if (coupon.type === 'amount') return totalAmount - coupon.discountAmount;
    return items.reduce((total, item) => {
      if (item.availableCoupon !== undefined && item.availableCoupon === false) { return total + item.price * item.amount; }
      return Math.floor(total + item.price * item.amount * (1 - coupon.discountRate / 100));
    }, 0);
  };

  return (
    <Title level={5}>
      결제 금액 :
      {' '}
      {calculateTotalAmount()}
      원
    </Title>
  );
};

export default TotalAmount;
