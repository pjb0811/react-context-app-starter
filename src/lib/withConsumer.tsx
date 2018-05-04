import * as React from 'react';

const WithConsumer = (Consumer: any) => (WrappedComponent: any) => {
  return (props: any) => {
    return (
      <Consumer>
        {(context: any) => {
          return <WrappedComponent {...context} {...props} />;
        }}
      </Consumer>
    );
  };
};

export default WithConsumer;
