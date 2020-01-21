import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { Check } from '@styled-icons/fa-solid/Check';

import StyledButton from '../StyledButton';

const ChoosePlanButton = styled(StyledButton)`
  background: linear-gradient(180deg, #1869f5 0%, #1659e1 100%);
  border-radius: 100px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
`;

const StyledCheck = styled(Check)`
  color: #25b869;
`;

const Wrapper = styled(Box)`
  border: 1px solid #dcdee0;
  border-radius: 8px;
`;

const StyledTable = styled.table`
  height: 407px;

  td:nth-child(1),
  th:nth-child(1) {
    background: #f7f8fa;
    width: 176px;
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    text-align: right;
    letter-spacing: -0.012em;
    padding: 5px 24px;
  }

  td:nth-child(n + 2) {
    width: 200px;
    text-align: center;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.008em;
  }

  th {
    padding-top: 32px;
    padding-bottom: 10px;
  }

  th:nth-child(n + 2) {
    width: 200px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.black[700]};
  }

  th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid #dcdee0;
  }

  td,
  span {
    &.price {
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.2px;
    }
    &.frequency {
      font-weight: 300;
    }
  }
`;

const pricingPlans = [
  {
    id: 0,
    name: 'Free',
    price: 0,
    fundraiseViaCreditCardPayment: '5% + Stripe Fees',
    allCollectivePageFeatures: 'mark',
    fundReceivedThroughOthers: 'Up to $1,000',
    bankTransferPayments: 'Up to $1,000',
  },
  {
    id: 1,
    name: 'Single Collective',
    price: {
      amount: '10',
      frequency: 'month',
    },
    fundraiseViaCreditCardPayment: '5% + Stripe Fees',
    allCollectivePageFeatures: 'mark',
    fundReceivedThroughOthers: 'mark',
    bankTransferPayments: 'mark',
  },
];

const PricingTable = () => (
  <Flex my={4} justifyContent="center">
    <Wrapper>
      <StyledTable as="table" height="407px">
        <thead>
          <tr>
            <th></th>
            <th>Starter</th>
            <th>Single Collective</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            <td className="price">FREE</td>
            <td>
              <span className="price">$10</span> <span className="frequency">month</span>
            </td>
          </tr>
          <tr>
            <td>Fundraise via credit card payments</td>
            <td>5% + Stripe Fees</td>
            <td>5% + Stripe Fees</td>
          </tr>
          <tr>
            <td>All Collective page features</td>
            <td>
              <StyledCheck size="13" />
            </td>
            <td>
              <StyledCheck size="13" />
            </td>
          </tr>
          <tr>
            <td>Add founds received through other channels</td>
            <td>Up to $1,000</td>
            <td>
              <StyledCheck size="13" />
            </td>
          </tr>
          <tr>
            <td>Enable bank transfer payments</td>
            <td>Up to $1,000</td>
            <td>
              <StyledCheck size="13" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <ChoosePlanButton>Choose Plan</ChoosePlanButton>
            </td>
            <td>
              <ChoosePlanButton>Choose Plan</ChoosePlanButton>
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </Wrapper>
  </Flex>
);

export default PricingTable;
