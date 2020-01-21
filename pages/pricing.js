import React, { Component } from 'react';

import Container from '../components/Container';
import PricingTable from '../components/pricing/PricingTable';
import Page from '../components/Page';
import PricingTabs from '../components/pricing/PricingTabs';
import SingleCollectiveWithBankAccount from '../components/pricing/SingleCollectiveWithBankAccount';
import SingleCollectiveWithoutBankAccount from '../components/pricing/SingleCollectiveWithoutBankAccount';

export default class pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '',
    };
  }

  render() {
    return (
      <Page>
        <Container>
          {/* <PricingTabs  /> */}
          {/* <PricingTable /> */}
          {/* <SingleCollectiveWithBankAccount /> */}
          <SingleCollectiveWithoutBankAccount />
        </Container>
      </Page>
    );
  }
}
