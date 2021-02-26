import React, {Component} from 'react';
import "./TodoListItem.css"

class TodoListItem extends Component {


  render() {

    const {label, onDeleted, onToggleDone, onToggleImportant, done, important} = this.props;

    let classNames = 'todo-item';

    if (done) {
      classNames = classNames + ' done'
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <div className="d-flex justify-content-between todolist-item__wrap">
        <span className={classNames} onClick={onToggleDone}>{label}</span>
        <div className="btn-group">
          <button type="button" className="btn btn-danger" onClick={onDeleted}>
            <i className="fa fa-trash" aria-hidden="true"/>
          </button>
          <button type="button" className="btn btn-warning" onClick={onToggleImportant}>
            <i className="fa fa-exclamation" aria-hidden="true"/>
          </button>
        </div>
      </div>
    )
  }
}

export default TodoListItem;