import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CLEAR_COMPLETE_TODO } from '../store/actions/types'
class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.itemLeft}</strong> item left
                </span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">
                            All
                        </a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                {this.props.hascompleted && (
                    <button
                        onClick={e => this.props.doneAll()}
                        className="clear-completed"
                    >
                        Clear completed
                    </button>
                )}
            </footer>
        )
    }
}

export default connect(
    state => ({
        hascompleted: state.filter(todo => todo.completed).length
            ? true
            : false,
        itemLeft: state.filter(todo => !todo.completed).length,
    }),
    d => ({ doneAll: () => d({ type: CLEAR_COMPLETE_TODO }) })
)(Footer)
