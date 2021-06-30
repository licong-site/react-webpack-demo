import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '@/components/Hello';
import Toolbar from '@/components/Toolbar';
import { themes, ThemeContext } from './components/Toolbar/theme-context';

// ReactDOM.render(
//   <React.StrictMode>
//     <Hello name={'Jim'} />
//   </React.StrictMode>,
//   document.getElementById('root') as HTMLElement
// );

interface IAppState {
  theme: typeof themes.light,
}
interface IAppProps {
}

class App extends React.Component<IAppProps, IAppState> {
  public readonly state: Readonly<IAppState> = {
    theme: themes.light,
  }

  public toggleTheme = () => {
    this.setState((state: IAppState) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  public render() {
    return (
      <React.StrictMode>
        <Hello name={'Jim'} />
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}></Toolbar>
        </ThemeContext.Provider>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
