import * as React from 'react';
import { withCounter } from 'contexts/Counter';

interface Props {
  state: any;
}

const Post = (props: Props) => {
  const { state } = props;
  return (
    <div>
      <div>{JSON.stringify(state.post)}</div>
    </div>
  );
};

export default withCounter(Post);
