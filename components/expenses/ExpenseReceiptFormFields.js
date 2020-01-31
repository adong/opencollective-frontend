import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import { FormattedMessage } from 'react-intl';
import { Lock } from '@styled-icons/fa-solid';
import { isEmpty } from 'lodash';

import { Label, Span } from '../Text';
import MultipleAttachmentsDropzone from './MultipleAttachmentsDropzone';
import StyledButton from '../StyledButton';

/**
 * Fields for expenses with type=RECEIPT
 */
const ExpenseReceiptFormFields = ({ attachments, setAttachments }) => {
  const hasAttachments = !isEmpty(attachments);

  return hasAttachments ? (
    <Box>
      <Flex mb={4}>
        <Box mr={3}>
          <Label fontSize="LeadCaption" color="black.800">
            <FormattedMessage id="Expense.Attachment" defaultMessage="Attachment" />
            &nbsp;
            <Lock size="1em" color="#969BA3" />
          </Label>
        </Box>
      </Flex>
      <StyledButton buttonStyle="secondary" width="100%">
        <Span mr={2}>
          <FormattedMessage id="CreateExpenseForm.AddReceipt" defaultMessage="Add another receipt" />
        </Span>
        <Span fontWeight="bold">+</Span>
      </StyledButton>
    </Box>
  ) : (
    <MultipleAttachmentsDropzone
      onSuccess={files =>
        setAttachments(
          files.map(url => {
            return { url };
          }),
        )
      }
    />
  );
};

ExpenseReceiptFormFields.propTypes = {
  setAttachments: PropTypes.func.isRequired,
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  ),
};

export default ExpenseReceiptFormFields;
