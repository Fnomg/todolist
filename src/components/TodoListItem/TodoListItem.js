import React, {Component} from 'react';
import "./TodoListItem.css"

class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onImportantClick = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }

    render() {

        const { label, onDeleted } = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-item';

        if (done) {
            classNames = classNames + ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <div className="d-flex justify-content-between todolist-item__wrap">
                <span className={classNames} onClick={this.onLabelClick}>{label}</span>
                <div className="btn-group">
                    <button type="button" className="btn btn-danger" onClick={ onDeleted }>
                        <i className="fa fa-trash" aria-hidden="true" />
                    </button>
                    <button type="button" className="btn btn-warning" onClick={ this.onImportantClick }>
                        <i className="fa fa-exclamation" aria-hidden="true" />
                    </button>
                </div>
            </div>
        )
    }
}

export default TodoListItem;