import React from 'react';
import { connect } from 'react-redux';
import "./App.css";
import * as actionCreator from './store/actions/actions';
import logo from './logo.svg';
class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 className="age">Age : <span>{this.props.age}</span></h1>
        <button className="ageUp" onClick={this.props.onAgeUp}>Age Up</button>
        <button className="ageDown" onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
        <div>
          <ul>
            {
              this.props.history.map(element => (
                <li
                  className="history"
                  key={element.id}
                  onClick={() => this.props.onDeleteItem(element.id)}>
                  {element.age}
                </li>
              ))
            }
          </ul>
        </div>
        {this.props.loading && <img src={logo} className="App-logo" alt="logo" />}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    onDeleteItem: (id) => dispatch(actionCreator.deleteItem(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
