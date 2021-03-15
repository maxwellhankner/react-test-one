import React from 'react';
import { render } from 'react-testing-library';

import PageTitle from '../index';

describe('<PageTitle />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(
      <PageTitle>{children}</PageTitle>,
    );
    const { childNodes } = container.querySelector('h2');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
