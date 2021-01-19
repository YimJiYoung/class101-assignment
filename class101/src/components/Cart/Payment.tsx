import React, { useState } from 'react';
import { CartItem as ICartItem, Coupon } from '../../types';
import useFetch from '../../hooks/useFetch';
import CouponSelect from './CouponSelect';
import TotalAmount from './TotalAmount';

interface IProps {
  items: ICartItem[];
}

const Payment = ({ items }: IProps) => {
  const [coupons] = useFetch<Coupon>('data/coupons.json');
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon>();

  const handleSelect = (value: string) => {
    const targetCoupon = coupons.find((coupon) => coupon.title === value);
    if (targetCoupon) setSelectedCoupon(targetCoupon);
  };

  return (
    <>
      <CouponSelect coupons={coupons} onSelect={handleSelect} />
      <TotalAmount items={items} coupon={selectedCoupon} />
    </>
  );
};

export default Payment;
