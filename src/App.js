import React from 'react';
import { connect } from 'react-redux';
class App extends React.Component {

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Age : <span>{this.props.age}</span></h1>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP' }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
