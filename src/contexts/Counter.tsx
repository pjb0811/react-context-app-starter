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
      this.actions.getPost(this.state.count + 1).then(post => {
        this.setState(prevState => {
          return {
            count: prevState.count + 1,
            post
          };
        });
      });
    },
    decrement: () => {
      this.actions.getPost(this.state.count - 1).then(post => {
        this.setState(prevState => {
          return {
            count: prevState.count - 1,
            post
          };
        });
      });
    },
    getPost: (postId: number) => {
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
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
