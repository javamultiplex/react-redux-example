import React from 'react';
import { connect } from 'react-redux';
import "./App.css";
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
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
    onDeleteItem: (id) => dispatch({ type: 'DELETE_ITEM', key: id })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
