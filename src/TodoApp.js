import React, { Component } from 'react'
import classNames from 'classnames'
import Footer from './components/Footer'
import Header from './components/Header'
import { connect } from 'react-redux'
import removeTodo from './store/actions/removeTodo'
import toggleDoneTodo from './store/actions/toggleDoneTodo'
import completeAllTodos from './store/actions/completeAllTodos'
import editTodo from './store/actions/editTodo'
class TodoApp extends Component {
    state = {
        editingID: null,
    }

    onEnter = e => {
        if (e.keyCode === 13) {
            this.props.editTodo({
                id: this.state.editingID,
                task: e.target.value,
            })
            this.setState({ editingID: null })
        }
    }

    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header />
                    <section className="main">
                        <input
                            id="toggle-all"
                            className="toggle-all"
                            type="checkbox"
                            onChange={e => this.props.completeAllTodos()}
                        />
                        <label htmlFor="toggle-all">Mark all as complete</label>
                        <ul className="todo-list">
                            {this.props.todos.map(todo => (
                                <li
                                    className={classNames({
                                        editing:
                                            this.state.editingID === todo.id,
                                        completed: todo.completed,
                                    })}
                                    key={todo.id}
                                >
                                    <div
                                        className="view"
                                        onDoubleClick={e =>
                                            this.setState({
                                                editingID: todo.id,
                                            })
                                        }
                                    >
                                        <input
                                            className="toggle"
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={e =>
                                                this.props.toggleDone(todo.id)
                                            }
                                        />
                                        <label>{todo.task}</label>
                                        <button
                                            className="destroy"
                                            onClick={e =>
                                                this.props.remove(todo.id)
                                            }
                                        />
                                    </div>
                                    <input
                                        className="edit"
                                        defaultValue={todo.task}
                                        onKeyDown={this.onEnter}
                                        ref="editedTask"
                                    />
                                </li>
                            ))}
                        </ul>
                    </section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default connect(
    state => ({ todos: state }),
    dispatch => ({
        remove: id => dispatch(removeTodo(id)),
        toggleDone: id => dispatch(toggleDoneTodo(id)),
        completeAllTodos: () => dispatch(completeAllTodos()),
        editTodo: todoWithIdAndTask => dispatch(editTodo(todoWithIdAndTask)),
    })
)(TodoApp)
