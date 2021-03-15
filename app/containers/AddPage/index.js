import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectWord, makeSelectAddingWord } from './selectors';
import { changeWord, addWord } from './actions';
import Section from './Section';
import Form from './Form';
import Input from './Input';
import InputButton from './InputButton';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import LoadingIndicator from '../../components/LoadingIndicator';
import ValidationError from './ValidationError';
import { validateWord } from './validateWord';

export function AddPage({ word, addingWord, onChangeWord, onSubmitForm }) {
  useInjectReducer({ key: 'addPage', reducer });
  useInjectSaga({ key: 'addPage', saga });

  const [formError, setFormError] = useState(false);

  const handleValidation = evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    const validation = validateWord(word);
    if (validation) {
      setFormError(validation);
    } else {
      setFormError(false);
      onSubmitForm(evt);
    }
  };

  return (
    <Section>
      <Helmet>
        <title>AddPage</title>
        <meta name="description" content="Add a word to the list" />
      </Helmet>
      <PageTitle>
        <FormattedMessage {...messages.header} />
      </PageTitle>
      <div style={{ position: 'relative' }}>
        <Form onSubmit={handleValidation}>
          <label htmlFor="word">
            <Input
              id="word"
              type="text"
              placeholder="word"
              value={word}
              onChange={onChangeWord}
              required
            />
          </label>
          <InputButton type="submit" value="add" />
        </Form>
        {addingWord && <LoadingIndicator forAdding />}
      </div>
      {formError && <ValidationError>{formError}</ValidationError>}
      <Button route="/" buttonText="view list" />
    </Section>
  );
}

AddPage.propTypes = {
  word: PropTypes.string,
  addingWord: PropTypes.bool,
  onChangeWord: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  word: makeSelectWord(),
  addingWord: makeSelectAddingWord(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeWord: evt => dispatch(changeWord(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addWord());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddPage);
