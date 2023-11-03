import React from 'react';
import { useSelector } from 'react-redux';
import { Flowbite } from 'flowbite-react';
import PropTypes from 'prop-types';

export const ThemeProvider = ({ children }) => {
  const customTheme = useSelector((state) => state.theme.customTheme);

  return (
    <Flowbite theme={{ theme: customTheme }}>
      {children}
    </Flowbite>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};