import * as React from 'react';
import * as R from 'ramda';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Form from '.';
import FormField from './../FormField';
import TextInput from './../TextInput';
import Button from './../Button';
import wait from './../../utils/wait';

/**
 * Helper for submitting a form and getting the results back.
 *
 * @param $form The form element to trigger submission for.
 * @param mockFn The mocked function that will be called with submission values.
 */
async function submitForm($form: HTMLFormElement, mockFn: jest.Mock) {
  fireEvent.submit($form);
  await wait(10);
  return R.last(mockFn.mock.calls);
}

describe('<Form />', () => {
  describe('Submission', () => {
    it('returns submission values', async () => {
      const onSubmit = jest.fn();
      const formValues = { email: 'test@test.com' };

      const { container } = render(
        <Form initialValues={formValues} onSubmit={onSubmit} validate={() => ({})}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormField name="email">
                <TextInput type="email" />
              </FormField>
              <Button>Submit</Button>
            </form>
          )}
        </Form>
      );

      const $form = container.querySelector('form') as HTMLFormElement;
      const [formSubmissionValues] = await submitForm($form, onSubmit);

      expect(onSubmit).toHaveBeenCalled();
      expect(formSubmissionValues).toEqual(formValues);
    });
  });

  describe('Conditional fields', () => {
    /**
     * Conditional fields should not 'clear' values when they are hidden.
     */
    it('restores field values after hide/show', async () => {
      const conditionalValue = 'a value';
      const formValues = { email: 'test@test.com', conditional: '' };

      const { container } = render(
        <Form initialValues={formValues} onSubmit={() => ({})} validate={() => ({})}>
          {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit} data-testid="form">
              <FormField name="name">
                <TextInput type="text" />
              </FormField>
              <FormField name="email">
                <TextInput testId="email-field" type="email" />
              </FormField>
              {
                // Only show the field if 'email' is populated
                values.email && (
                  <FormField name="conditional">
                    <TextInput testId="conditional-field" type="text" />
                  </FormField>
                )
              }
              <Button>Submit</Button>
            </form>
          )}
        </Form>
      );

      const $emailInput = getByTestId(container, 'email-field') as HTMLInputElement;
      const $conditionalInput = getByTestId(container, 'conditional-field') as HTMLInputElement;

      // Populate the conditional input
      fireEvent.change($conditionalInput, { target: { value: conditionalValue } });

      // Empty the email input, effectively hiding the conditional field
      fireEvent.change($emailInput, { target: { value: '' } });

      // Ensure next tick so our changes have taken effect
      await wait(10);

      // Re-populate the email input, showing the conditional field
      fireEvent.change($emailInput, { target: { value: formValues.email } });

      // Value should be restored to what it was before it was hidden
      expect($conditionalInput.value).toEqual(conditionalValue);
    });

    /**
     * Test if a field that has already been populated, but then hidden,
     * is correctly excluded from the submission results.
     */
    it('removes hidden fields from submission values', async () => {
      const onSubmit = jest.fn();
      const formValues = {
        name: 'John Smith',
        email: 'test@test.com',
        conditional: 'a value',
      };
      const expectedValues = {
        name: formValues.name,
        email: '',
      };

      const { container } = render(
        <Form
          initialValues={formValues}
          onSubmit={onSubmit}
          validate={() => ({})}
        >
          {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit} data-testid="form">
              <FormField name="name">
                <TextInput type="text" />
              </FormField>
              <FormField name="email">
                <TextInput testId="email-field" type="email" />
              </FormField>
              {
                // Only show the field if 'email' is populated
                values.email && (
                  <FormField name="conditional">
                    <TextInput type="text" />
                  </FormField>
                )
              }
              <Button>Submit</Button>
            </form>
          )}
        </Form>
      );

      const $form = getByTestId(container, 'form') as HTMLFormElement;
      const $emailInput = getByTestId($form, 'email-field') as HTMLInputElement;

      // Empty the value, effectively hiding the conditional field
      fireEvent.change($emailInput, { target: { value: '' } })

      const [formSubmissionValues] = await submitForm($form, onSubmit);

      expect(onSubmit).toHaveBeenCalled();
      expect(formSubmissionValues).toEqual(expectedValues);
    });
  });
});


