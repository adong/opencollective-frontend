import React, { useState, Fragment } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import themeGet from '@styled-system/theme-get';
import { FormattedMessage, useIntl, defineMessages } from 'react-intl';
import { Flex, Box } from '@rebass/grid';

import { Span, H4, P } from '../../Text';
import Container from '../../Container';
import SectionTitle from '../SectionTitle';
import SectionSubtitle from '../SectionSubtitle';
import Illustration from '../HomeIllustration';
import StyledCarousel from '../../StyledCarousel';

const SelectFeatureButton = styled.button`
  width: 100%;
  cursor: pointer;
  color: #1869f5;
  border: none;
  outline: none;
  background: #fff;
  padding: 0;

  @media screen and (min-width: 64em) {
    color: ${themeGet('colors.black.700')};
    width: 286px;

    ${props =>
      props.active &&
      css`
        color: #dc5f7d;
        border: 1px solid #e6f3ff;
        border-radius: 8px;
        background: #ffffff;
        outline: none;
      `}

    &:hover {
      color: #1869f5;
    }
  }

  @media screen and (min-width: 88em) {
    width: 317px;
  }
`;

const FeatureListWrapper = styled(Box)`
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FeatureList = styled(Box)`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 14px 0;
`;

const Title = styled(Span)`
  @media screen and (min-width: 64em) {
    color: ${props => props.active && '#DC5F7D'};
  }
`;

const LearnMoreLink = styled.a`
  color: #dc5f7d;

  &:hover {
    color: #dc5f7d;
  }
`;

const features = [
  {
    id: 'shareBudget',
  },
  {
    id: 'receiveContributions',
  },
  {
    id: 'manageExpenses',
  },
  {
    id: 'engageCommunity',
  },
  {
    id: 'celebrateSupporters',
  },
  {
    id: 'getMonthlyReports',
  },
];

const messages = defineMessages({
  'home.feature.shareBudget': {
    id: 'home.feature.shareBudget',
    defaultMessage: 'Share your budget',
  },
  'home.feature.shareBudget.description': {
    id: 'home.feature.shareBudget.description',
    defaultMessage:
      'Everyone can see where money comes from and where it goes. Clarity and accountability without any spreadsheets or extra work!',
  },
  'home.feature.receiveContributions': {
    id: 'home.feature.receiveContributions',
    defaultMessage: 'Receive Contributions',
  },
  'home.feature.receiveContributions.description': {
    id: 'home.feature.receiveContributions.description',
    defaultMessage:
      'Accept payments by credit card, bank transfer, and Paypal. Define custom tiers and set goals to motivate your supporters to give.',
  },
  'home.feature.manageExpenses': {
    id: 'home.feature.manageExpenses',
    defaultMessage: 'Manage Expenses',
  },
  'home.feature.manageExpenses.description': {
    id: 'home.feature.manageExpenses.description',
    defaultMessage:
      'Contributors and vendors can easily submit receipts and invoices. You approve or reject them, and once paid your balance updates automatically.',
  },
  'home.feature.engageCommunity': {
    id: 'home.feature.engageCommunity',
    defaultMessage: 'Engage your community',
  },
  'home.feature.engageCommunity.description': {
    id: 'home.feature.engageCommunity.description',
    defaultMessage:
      'Post Updates to engage supporters and share your progress and the impact of their funding. Use Conversations as a community discussion forum.',
  },
  'home.feature.celebrateSupporters': {
    id: 'home.feature.celebrateSupporters',
    defaultMessage: 'Celebrate your supporters',
  },
  'home.feature.celebrateSupporters.description': {
    id: 'home.feature.celebrateSupporters.description',
    defaultMessage:
      'Leaderboard of your top funders, plus highlight how your whole community contributes in different ways.',
  },
  'home.feature.getMonthlyReports': {
    id: 'home.feature.getMonthlyReports',
    defaultMessage: 'Get monthly reports',
  },
  'home.feature.getMonthlyReports.description': {
    id: 'home.feature.getMonthlyReports.description',
    defaultMessage:
      'A summary of your group’s activities, progress on your budget goals, new contributors, and expense details, with all transaction data and receipts/invoices attached. ',
  },
});

const FeatureTitle = ({ feature, intl, activeFeature, ...props }) => {
  const iconUrl =
    activeFeature === feature ? `/static/images/${feature}-icon.png` : `/static/images/${feature}-icon-black.png`;

  return (
    <Flex alignItems="center" justifyContent="space-between" width={1} {...props}>
      <Container display="flex" alignItems="center">
        <Box width={['36px', null, '64px']} height={['36px', null, '64px']} mr={[3, null, 2]}>
          <Illustration src={iconUrl} alt={`${feature} icon`} />
        </Box>
        <Title
          color={['black.700', null, null]}
          active={feature === activeFeature}
          fontWeight={['500', null, 'bold']}
          textAlign="left"
          fontSize={['18px', null, '16px']}
          lineHeight={['26px', null, '22px']}
          letterSpacing={['-0.012em', null, '-0.008em']}
        >
          {intl.formatMessage(messages[`home.feature.${feature}`])}
        </Title>
      </Container>
    </Flex>
  );
};

FeatureTitle.propTypes = {
  feature: PropTypes.string.isRequired,
  activeFeature: PropTypes.string,
  intl: PropTypes.any.isRequired,
};

const FeatureDescription = ({ intl, feature, ...props }) => (
  <Box {...props}>
    <P
      fontSize={['Caption', 'LeadParagraph']}
      lineHeight={['19px', '26px']}
      color="black.600"
      letterSpacing={'-0.016em'}
      textAlign="left"
    >
      {intl.formatMessage(messages[`home.feature.${feature}.description`])}{' '}
      <LearnMoreLink href="#">
        <FormattedMessage id="home.feature.learnmore" defaultMessage="Learn more..." />
      </LearnMoreLink>
    </P>
  </Box>
);

FeatureDescription.propTypes = {
  feature: PropTypes.string.isRequired,
  intl: PropTypes.any.isRequired,
};

const Feature = ({ feature, intl }) => (
  <Container width={1} display="flex" mr={2} flexDirection="column">
    <FeatureTitle intl={intl} feature={feature} display={[null, null, 'none']} />
    <Container mb={[2, null, 5]} ml={[null, null, 4]} width={[null, null, '400px', null, '624px']} textAlign="left">
      <H4 display={['none', null, 'block']} letterSpacing="-0.4px" fontWeight="500" color="black.800" my={3}>
        {intl.formatMessage(messages[`home.feature.${feature}`])}
      </H4>
      <FeatureDescription intl={intl} feature={feature} display={['none', null, 'block']} />
    </Container>
    <Container width={[null, null, '609px', null, '735px']}>
      <Box display={['none', null, 'block']}>
        <Illustration
          src={`/static/images/${feature}-screenshot.png`}
          alt={intl.formatMessage(messages[`home.feature.${feature}`])}
        />
      </Box>
      <Box display={['block', null, 'none']}>
        <Illustration
          src={`/static/images/${feature}-screenshot-sm.png`}
          alt={intl.formatMessage(messages[`home.feature.${feature}`])}
        />
      </Box>
    </Container>
    <FeatureDescription intl={intl} feature={feature} display={['block', null, 'none']} mt={2} />
  </Container>
);

Feature.propTypes = {
  feature: PropTypes.string.isRequired,
  intl: PropTypes.any.isRequired,
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState('shareBudget');
  const intl = useIntl();

  return (
    <Flex mx={[3, 4]} flexDirection="column" textAlign="center" my={[4, null, 0]}>
      <SectionTitle>
        <FormattedMessage id="home.featureSection.title" defaultMessage="How to use Open Collective?" />
      </SectionTitle>
      <SectionSubtitle>
        <FormattedMessage
          id="home.featureSection.subTitle"
          defaultMessage="Discover the possibilities of our features."
        />
      </SectionSubtitle>
      <Flex
        flexDirection={['column', null, 'row-reverse']}
        alignItems={[null, null, 'center', null, 'flex-end']}
        mt={4}
        justifyContent="center"
      >
        <FeatureListWrapper as="ul" display={['none', null, 'flex']}>
          {features.map(feature => (
            <FeatureList ml={[null, null, 4, null, 6]} mr={[null, null, null, null, 2]} as="li" key={feature.id}>
              <SelectFeatureButton
                width={1}
                onClick={() => setActiveFeature(feature.id)}
                active={activeFeature === feature.id}
              >
                <FeatureTitle intl={intl} feature={feature.id} activeFeature={activeFeature} />
              </SelectFeatureButton>
            </FeatureList>
          ))}
        </FeatureListWrapper>
        <StyledCarousel display={[null, null, 'none']} width={1}>
          {features.map(feature => (
            <Fragment key={feature.id}>
              <Feature feature={feature.id} intl={intl} />
            </Fragment>
          ))}
        </StyledCarousel>
        <Container display={['none', null, 'block']} height="672px">
          <Feature feature={activeFeature} intl={intl} />
        </Container>
      </Flex>
    </Flex>
  );
};

export default Features;
