import calculateTotal from './calculateTotal';

test('정액 할인이 정상적으로 적용되어야 한다', () => {
  // given
  const items = [{
    id: '1',
    price: 50000,
    amount: 1,
  }, {
    id: '2',
    price: 70000,
    amount: 1,
  }];

  const coupon = {
    type: 'amount',
    title: '5,000원 할인 쿠폰',
    discountAmount: 5000,
  } as const;

  // when
  const total = calculateTotal(items, coupon);

  // then (50000 + 70000) - 5000 = 115,000원
  expect(total).toBe(115000);
});

test('비율 할인이 정상적으로 적용되어야 한다', () => {
  // given
  const items = [{
    id: '1',
    price: 50000,
    amount: 1,
  }, {
    id: '3',
    price: 100000,
    amount: 1,
    availableCoupon: false,
  }];

  const coupon = {
    type: 'rate',
    title: '10% 할인 쿠폰',
    discountRate: 10,
  } as const;

  // when
  const total = calculateTotal(items, coupon);

  // then (50000 * 0.9) + 100,000 = 145,000
  expect(total).toBe(145000);
});
