import React from 'react';

import './custom-button.styles.scss'

// eslint-disable-next-line react/prop-types
const CustomButton = ({children, ...otherProps}) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
)

export default CustomButton