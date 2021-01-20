import { CartItem, Coupon } from '../types';

const calculateTotal = (items: CartItem[], coupon?: Coupon): number => {
  const totalAmount = items.reduce((total, item) => total + item.price * item.amount, 0);
  if (!coupon) return totalAmount;
  if (coupon.type === 'amount') return totalAmount - coupon.discountAmount;
  return items.reduce((total, item) => {
    if (item.availableCoupon !== undefined && item.availableCoupon === false) { return total + item.price * item.amount; }
    return Math.floor(total + item.price * item.amount * (1 - coupon.discountRate / 100));
  }, 0);
};

export default calculateTotal;
