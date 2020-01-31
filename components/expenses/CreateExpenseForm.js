import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Box } from '@rebass/grid';

import expenseTypes from '../../lib/constants/expenseTypes';
import { P, Span } from '../Text';
import ExpenseTypeRadioSelect from './ExpenseTypeRadioSelect';
import StyledInput from '../StyledInput';
import StyledHr from '../StyledHr';
import ExpenseReceiptFormFields from './ExpenseReceiptFormFields';

const msg = defineMessages({
  descriptionPlaceholder: {
    id: `CreateExpenseForm.DescriptionPlaceholder`,
    defaultMessage: 'Enter expense title',
  },
});

const CreateExpenseForm = ({ onSubmit }) => {
  const { formatMessage } = useIntl();
  const { register, handleSubmit, triggerValidation, errors, getValues } = useForm();
  const values = getValues();
  const hasBaseFormFieldsCompleted = values.type && values.description && !errors.description;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <P fontSize="LeadParagraph" fontWeight="bold" mb={3}>
        <FormattedMessage id="CreateExpenseForm.Type" defaultMessage="Which type of expense is it? " />
      </P>
      <ExpenseTypeRadioSelect
        name="type"
        inputRef={register({ required: true })}
        onChange={() => triggerValidation('type')}
      />
      {values.type && (
        <Box mt={4} width="100%">
          <StyledInput
            name="description"
            ref={register({ required: true, minLength: 1, maxLength: 255 })}
            onChange={() => triggerValidation('description')}
            placeholder={formatMessage(msg.descriptionPlaceholder)}
            width="100%"
            fontSize="H4"
            border="0"
            error={errors.description}
            px={0}
            withOutline
          />
          <StyledHr mt={3} borderColor="black.300" />
          <P color={hasBaseFormFieldsCompleted ? 'black.900' : 'black.300'} fontSize="LeadParagraph" my={24}>
            <FormattedMessage id="CreateExpenseForm.Step1" defaultMessage="1. Upload one or multiple receipts" />
          </P>
          {hasBaseFormFieldsCompleted && (
            <Box mb={4}>{values.type === expenseTypes.RECEIPT && <ExpenseReceiptFormFields />}</Box>
          )}
          <StyledHr borderColor="black.300" />
          <P color="black.300" fontSize="LeadParagraph" my={24}>
            <FormattedMessage id="CreateExpenseForm.Step2" defaultMessage="2. Payee & payout information" />
          </P>
          <StyledHr borderColor="black.300" />
        </Box>
      )}
    </form>
  );
};

CreateExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateExpenseForm;
