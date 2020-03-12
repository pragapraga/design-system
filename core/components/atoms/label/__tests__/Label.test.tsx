import * as React from 'react';
import { shallow } from 'enzyme';
import Label, { ILabelProps as IProps } from '../Label';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const BooleanValue = [true, false];
const mapper = {
  disabled: valueHelper(BooleanValue, { required: true, iterate: true })
};

describe('Label component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Label>{'Label'}</Label>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
