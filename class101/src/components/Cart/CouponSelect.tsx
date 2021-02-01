import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import { Coupon } from '../../types';

const { Option } = Select;

interface IProps {
  coupons: Coupon[];
  onSelect: (value: string) => void;
}

const SelectWrapper = styled.div`
  margin: 15px 0px;
`;

const CouponSelect = ({ coupons, onSelect } :IProps) => (
  <SelectWrapper>
    <Select
      size="large"
      placeholder="Select a coupon"
      dropdownMatchSelectWidth={false}
      onSelect={onSelect}
    >
      {coupons.map((coupon, idx) => (
        <Option key={idx} value={coupon.title}>{coupon.title}</Option>
      ))}
    </Select>
  </SelectWrapper>
);

export default CouponSelect;
