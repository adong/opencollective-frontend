import React from 'react';
import { Box, Flex } from '@rebass/grid';
import { FormattedMessage } from 'react-intl';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

import Container from '../Container';
import StyledButton from '../StyledButton';
import StyledLink from '../StyledLink';
import { Span, H1, P, H3 } from '../Text';

const SingleCollectiveWithoutBankAccount = () => (
  <Container mx={3} my={4}>
    <Box>
      <StyledButton buttonStyle="secondary">
        <ArrowBack size="13" />{' '}
        <Span fontSize="12px" lineHeight="14px">
          <FormattedMessage id="pricing.back.btn" defaultMessage="Back" />
        </Span>
      </StyledButton>
    </Box>

    <Box textAlign="center" my={3}>
      <H1 fontSize={['H3', null, 'H4']} lineHeight={['40px', null, 'H4']} letterSpacing={['-0.4px', null, '-0.2px']}>
        <FormattedMessage id="pricing.tab.welcome" defaultMessage="Welcome!" />
      </H1>
      <P my={3} fontSize={['Paragraph']} lineHeight={['H5']} letterSpacing={['-0.012em']}>
        <FormattedMessage id="pricing.tab.joinHost" defaultMessage="We invite you to join a Fiscal Host" />
      </P>
      <P my={3} fontSize={['Paragraph']} lineHeight={['H5']} letterSpacing={['-0.012em']}>
        <FormattedMessage
          id="pricing.fiscalHost.description"
          defaultMessage="A Fiscal Host is an organization who offers fund-holding as a service. They keep your money in their bank account. Fiscal Hosts handle things like accounting, taxes, admin, payments, and liability—so you don’t have to!"
        />
      </P>
      <P my={3} fontSize={['Paragraph']} lineHeight={['H5']} letterSpacing={['-0.012em']}>
        <FormattedMessage
          id="pricing.fiscalHost.reasonToJoin"
          defaultMessage="If you join a Fiscal Host, you don’t need to pay Open Collective, as your Collective is already included. Each Fiscal Host sets their own fees and acceptance criteria for Collectives."
        />
      </P>
      <P my={3} fontSize={['Paragraph']} lineHeight={['H5']} letterSpacing={['-0.012em']}>
        <FormattedMessage
          id="pricing.fiscalHost.applyOpenSource"
          defaultMessage="If you are an open source project, you can apply to join"
        />{' '}
        <StyledLink href="#">Open Source Collective.</StyledLink>
      </P>
    </Box>
    <Container my={4}>
      <H3 mb={3} textAlign="center" fontSize={['LeadParagraph']} lineHeight={['26px']} letterSpacing={['-0.008em']}>
        <FormattedMessage id="pricing.checkFiscalHost" defaultMessage="Check these Fiscal Hosts." />
      </H3>
      <Flex></Flex>
    </Container>
  </Container>
);

export default SingleCollectiveWithoutBankAccount;
