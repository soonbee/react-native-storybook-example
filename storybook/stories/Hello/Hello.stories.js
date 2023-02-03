import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Hello from '../../../src/components/Hello';

storiesOf('Hello', module).add('to Storybook', () => <Hello />);
