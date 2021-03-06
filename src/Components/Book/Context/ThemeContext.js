import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor() {
    super();

    this.state = {
      isLightTheme: true,
      light: { syntax: '#555', ul: '#ddd', bg: '#eee' },
      dark: { syntax: '#ddd', ul: '#333', bg: '#555' },
    };
  }

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
    // this.setState((state) => !state.isLightTheme);
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
