import * as React from 'react';
import Counter from './components/Counter';
import { CounterProvider } from './contexts/Counter';

const AppProvider = (props: { contexts: any; children: any }) =>
  props.contexts.reduce(
    (prev: any, context: any) =>
      React.createElement(context, {
        children: prev
      }),
    props.children
  );

const App = () => {
  return (
    <AppProvider contexts={[CounterProvider]}>
      <Counter />
    </AppProvider>
  );
};

export default App;
