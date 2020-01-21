import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { Flex, Box } from '@rebass/grid';

import StyledInputField from '../StyledInputField';
import StyledCard from '../StyledCard';
import StyledRadioList from '../StyledRadioList';
import Container from '../Container';
import { Span, P, H1 } from '../Text';

const Wrapper = styled(Container)`
  @media screen and (min-width: 64em) {
    background-image: url('/static/images/pricing-star-bg-desktop.png');
    background-size: 100% 100%;
    min-height: 108px;
    margin: 0;
  }
`;

const TabBox = styled(Box)`
  width: 330px;
  height: 104px;
  padding: 16px 32px;
  border-left: 1px solid;
  border-top: 1px solid;
  border-right: 1px solid;
  border-color: #e8e9eb;
  background-color: #f7f8fa;
  text-align: center;
  color: ${props => props.theme.colors.black[800]};

  ${({ active }) =>
    active &&
    `
    background: #fff;
    border-top-color: #297EFF;
  `};
`;

const messages = defineMessages({
  'tabs.singleCollectiveWithAccount': {
    id: 'tabs.singleCollectiveWithAccount',
    defaultMessage: 'A single Collective and I DO',
  },
  'tabs.singleCollectiveWithAccount.description': {
    id: 'tabs.singleCollectiveWithAccount.description',
    defaultMessage: 'have a bank account to receive money for my community',
  },
  'tabs.singleCollectiveWithoutAccount': {
    id: 'tabs.singleCollectiveWithoutAccount',
    defaultMessage: 'A single Collective and I DON’T',
  },
  'tabs.singleCollectiveWithoutAccount.description': {
    id: 'tabs.singleCollectiveWithoutAccount.description',
    defaultMessage: 'have a bank account to receive money for my community',
  },
  'tabs.organization': {
    id: 'tabs.organization',
    defaultMessage: 'An organization',
  },
  'tabs.organization.description': {
    id: 'tabs.organization.description',
    defaultMessage: 'to host multiple Collectives ',
  },
});

const tabs = ['singleCollectiveWithAccount', 'singleCollectiveWithoutAccount', 'organization'];

const PricingTabs = () => {
  const intl = useIntl();
  return (
    <Container>
      <Wrapper pt={4}>
        <Box width={1} display={['flex', null, 'none']}>
          <img width="100%" src="/static/images/pricing-star-bg-mobile.png" alt="Pricing" />
        </Box>
        <H1 fontSize={['H3', null, 'H1']} lineHeight={['40px', null, 'H1']} letterSpacing="-0.4px" textAlign="center">
          <FormattedMessage id="pricing.title" defaultMessage="Our pricing" />
        </H1>
      </Wrapper>
      <Container>
        <Box mx={3} my={2}>
          <P
            textAlign={['left', 'center']}
            fontSize={['LeadParagraph', null, 'H4']}
            fontWeight={['bold', null, 500]}
            lineHeight={['26px', null, 'H3']}
            letterSpacing={['-0.012em', null, '-0.4px']}
          >
            <FormattedMessage id="tabs.label" defaultMessage="I want to create…" />
          </P>
        </Box>
        <Container my={4} display={['flex', null, 'none']} justifyContent="center">
          <StyledInputField htmlFor="choose-tab">
            {fieldsProps => (
              <StyledCard width={['287px', '387px']}>
                <StyledRadioList {...fieldsProps} options={tabs} onChange={console.log}>
                  {({ key, value, radio, checked, index }) => (
                    <Container
                      display="flex"
                      alignItems="center"
                      p={3}
                      borderBottom="1px solid"
                      borderColor="black.300"
                    >
                      <Box as="span" mr={3}>
                        {radio}
                      </Box>
                      <Box as="div" display="flex" flexDirection="column">
                        <Span fontSize="13px" lineHeight="19px" letterSpacing="-0.008em">
                          {intl.formatMessage(messages[`tabs.${value}`])}...
                        </Span>
                        <Span
                          color="black.600"
                          fontSize="13px"
                          fontWeight="300"
                          lineHeight="19px"
                          letterSpacing="-0.012em"
                        >
                          {intl.formatMessage(messages[`tabs.${value}.description`])}
                        </Span>
                      </Box>
                    </Container>
                  )}
                </StyledRadioList>
              </StyledCard>
            )}
          </StyledInputField>
        </Container>
        <Container my={4} display="flex" justifyContent="center" borderBottom="1px solid" borderColor="#E8E9EB">
          {tabs.map(tab => (
            <TabBox key={tab} active={tab === 'singleCollectiveWithAccount'}>
              <Span fontWeight="bold">{intl.formatMessage(messages[`tabs.${tab}`])}</Span>{' '}
              <Span>{intl.formatMessage(messages[`tabs.${tab}.description`])}</Span>
            </TabBox>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default PricingTabs;
