import * as React from 'react';
import withConsumer from '../lib/withConsumer';
import axios from 'axios';

interface State {
  count: number;
  post: object;
}

const Context = React.createContext({});
const { Provider, Consumer: CounterConsumer } = Context;

class CounterProvider extends React.Component<any, State> {
  state = {
    count: 0,
    post: {}
  };
  actions = {
    increment: () => {
      this.setState(prevState => {
        this.actions.getPost(this.state.count + 1);
        return {
          ...prevState,
          count: prevState.count + 1
        };
      });
    },
    decrement: () => {
      this.setState(prevState => {
        this.actions.getPost(this.state.count - 1);
        return {
          ...prevState,
          count: prevState.count - 1
        };
      });
    },
    getPost: (postId: number) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(post => {
          this.setState({
            post
          });
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

export { CounterProvider, CounterConsumer, withCounter };
