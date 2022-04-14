import React, {PureComponent} from 'react';
import {ThemeProvider} from './provider';
import {storage} from 'storage';

export const withTheme = WrappedComponent => {
  return class extends PureComponent {
    render() {
      const theme = storage.getString('@theme') ?? 'light';
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent {...this.props} />
        </ThemeProvider>
      );
    }
  };
};
