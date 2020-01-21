import React from 'react';
import { Box } from '@rebass/grid';
import { FormattedMessage } from 'react-intl';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

import Container from '../Container';
import StyledButton from '../StyledButton';
import { Span, H1, P, H3 } from '../Text';

const SingleCollectiveWithBankAccount = () => (
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
      <P fontSize={['Paragraph']} lineHeight={['H5']} letterSpacing={['-0.012em']}>
        <FormattedMessage
          id="pricing.tab.description"
          defaultMessage="You will begin with the STARTER PLAN. This plan is FREE to set up!"
        />
      </P>
    </Box>

    <Container p={3} backgroundColor="black.50" borderRadius="8px">
      <H3
        my={2}
        fontSize={['LeadParagraph', null, 'H4']}
        lineHeight={['26px', null, 'H4']}
        letterSpacing={['-0.008em', null, '-0.2px']}
      >
        <FormattedMessage id="pricing.starterPlans" defaultMessage="The STARTER PLAN includes:" />
      </H3>
      <Box as="ul" mt={3} px={3} fontSize="13px" lineHeight="21px" letterSpacing="-0.012em">
        <li>
          <FormattedMessage
            id="pricing.starterPlans.collective"
            defaultMessage="Collective - a page to coordinate your community and budget."
          />
        </li>
        <li>
          <FormattedMessage
            id="pricing.starterPlans.communication"
            defaultMessage="Communication tools: post updates, start conversations, and get an email address for your group."
          />
        </li>
        <li>
          <FormattedMessage
            id="pricing.starterPlans.transparency"
            defaultMessage="Show your budget and expenses transparently"
          />
        </li>
        <li>
          <FormattedMessage
            id="pricing.starterPlans.fundraise"
            defaultMessage="Fundraise through credit card payments (cost: 5% plus Stripe payment processor fees)."
          />
        </li>
        <li>
          <FormattedMessage
            id="pricing.starterPlans.addFunds"
            defaultMessage="Manually add funds raised through other channels (e.g. bank transfers) to your transparent budget (free up to $1,000, then you’ll need to upgrade to a paid plan)."
          />
        </li>
      </Box>
    </Container>
  </Container>
);

export default SingleCollectiveWithBankAccount;
