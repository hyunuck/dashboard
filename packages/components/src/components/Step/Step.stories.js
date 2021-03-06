/*
Copyright 2019 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Step from './Step';

const props = {
  onSelect: action('selected'),
  stepName: 'build'
};

storiesOf('Components/Step', module)
  .add('default', () => <Step {...props} />)
  .add('selected', () => <Step {...props} selected />)
  .add('waiting', () => <Step {...props} status="waiting" />)
  .add('running', () => <Step {...props} status="running" />)
  .add('completed', () => (
    <Step {...props} status="terminated" reason="Completed" />
  ))
  .add('error', () => <Step {...props} status="terminated" reason="Error" />);
