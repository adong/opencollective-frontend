import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@rebass/grid';
import { Lock } from '@styled-icons/fa-solid';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

import { uploadImageWithXHR } from '../../lib/api';
import { Label, P } from '../Text';
import Container from '../Container';
import { I18nBold, getI18nLink } from '../I18nFormatters';
import StyledSpinner from '../StyledSpinner';

const Dropzone = styled.div`
  padding: 16px;
  border: 1px dashed #c4c7cc;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  background: white;

  &:hover {
    background: #f9f9f9;
  }
`;

/** Fets the average progress from a list of upload progress */
const getUploadProgress = uploadProgressList => {
  if (!uploadProgressList || uploadProgressList.length === 0) {
    return 0;
  } else {
    const totalUploadProgress = uploadProgressList.reduce((total, current) => total + current, 0);
    return totalUploadProgress / uploadProgressList.length;
  }
};

/**
 * A dropzone to create multiple expense attachments at once
 */
const MultipleAttachmentsDropzone = ({ onSuccess }) => {
  const [isUploading, setUploading] = React.useState(false);
  const [uploadProgressList, setUploadProgressList] = React.useState([]);
  const uploadProgress = getUploadProgress(uploadProgressList);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: React.useCallback(async acceptedFiles => {
      setUploading(true);
      const files = await Promise.all(
        acceptedFiles.map((file, index) =>
          uploadImageWithXHR(file, {
            mockImage: true,
            onProgress: progress => {
              const newProgressList = [...uploadProgressList];
              newProgressList.splice(index, 0, progress);
              setUploadProgressList(newProgressList);
            },
          }),
        ),
      );
      onSuccess(files);
      setUploading(false);
    }, []),
  });

  return (
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
      {isUploading ? (
        <Box my={2}>
          <Flex position="relative" size={56} m="0 auto" justifyContent="center" alignItems="center">
            <Container position="absolute">
              <StyledSpinner size={56} />
            </Container>
            <Container>{uploadProgress}%</Container>
          </Flex>
        </Box>
      ) : (
        <Box my={3}>
          <P color="black.500">
            <FormattedMessage
              id="MultipleAttachmentsDropzone.UploadBox"
              defaultMessage="Drag and drop one or multiple files or <i18n-link>click here to select</i18n-link>."
              values={{ 'i18n-link': getI18nLink() }}
            />
          </P>
          <P color="black.700">
            <FormattedMessage
              id="MultipleAttachmentsDropzone.UploadWarning"
              defaultMessage="<i18n-bold>Important</i18n-bold>: Expenses will not be paid without a valid receipt."
              values={{ 'i18n-bold': I18nBold }}
            />
          </P>
        </Box>
      )}
    </Dropzone>
  );
};

MultipleAttachmentsDropzone.propTypes = {
  /** Called back with the uploaded files on success */
  onSuccess: PropTypes.func,
};

export default MultipleAttachmentsDropzone;
