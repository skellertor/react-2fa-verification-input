import React from 'react';
import { fireEvent, userEvent, within } from '@storybook/testing-library';

import './verificationInput.css';

import { Verification } from '../component';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Verification Input',
  component: Verification,
  argTypes: {
    handleVerify: {
      name: 'handleVerify',
      description: 'callback function that receives the values of the inputs',
      type: { name: 'function' },
    },
    slots: { name: 'slots', type: { name: 'number' } },
    errorMessage: { name: 'errorMessage', type: { name: 'string' } },
    isAutomaticVerify: {
      name: 'isAutomaticVerify',
      type: { name: 'boolean' },
      control: { type: null },
    },
    verifyInputClassName: {
      name: 'verifyInputClassName',
      type: { name: 'string' },
      control: { type: null },
    },
    verifyInputErrorClassName: {
      name: 'verifyInputErrorClassName',
      type: { name: 'string' },
      control: { type: null },
    },
    verifyErrorMessageClassName: {
      name: 'verifyErrorMessageClassName',
      type: { name: 'string' },
      control: { type: null },
    },
    verifyButtonClassName: {
      name: 'verifyButtonClassName',
      type: { name: 'string' },
      control: { type: null },
    },
    verifyButtonText: {
      name: 'verifyButtonText',
      type: { name: 'string' },
    },
  },
};

const Template = (args) => <Verification {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  handleVerify(code) {
    console.log(`The code is ${code}`);
  },
};

export const CustomLength = Template.bind({});
CustomLength.args = {
  slots: 8,
};

export const CustomInputStyle = Template.bind({});
CustomInputStyle.args = {
  verifyInputClassName: 'rounded',
};

export const WithButton = Template.bind({});
WithButton.args = {
  isAutomaticVerify: false,
};

export const CustomButtonStyle = Template.bind({});
CustomButtonStyle.args = {
  isAutomaticVerify: false,
  verifyButtonClassName: 'warn',
  verifyButtonText: 'Do not push me',
};

export const CustomErrorStyle = Template.bind({});
CustomErrorStyle.args = {
  verifyInputErrorClassName: 'errorInput',
  verifyErrorMessageClassName: 'errorMessage',
  errorMessage: "C'mon man!",
};
CustomErrorStyle.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByTestId('verify-input')[0]);
  await userEvent.click(canvas.getByTestId('error-row'));
};
