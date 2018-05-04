import * as React from 'react';
import withConsumer from '../lib/withConsumer';

interface State {
  count: number;
}

const Context = React.createContext({});
const { Provider, Consumer: CounterConsumer } = Context;

class CounterProvider extends React.Component<any, State> {
  state = {
    count: 0
  };
  actions = {
    increment: () => {
      this.setState({
        count: this.state.count + 1
      });
    },
    decrement: () => {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

const withCounter = withConsumer(CounterConsumer);

export { CounterProvider, withCounter };
