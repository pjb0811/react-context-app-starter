import * as React from 'react';

interface Props {
  test: string;
}

interface State {
  input: string;
}

class Sends extends React.Component<Props, State> {
  state = {
    input: ''
  };

  handleChange = (e: any) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type="submit">설정</button>
      </form>
    );
  }
}

export default Sends;
