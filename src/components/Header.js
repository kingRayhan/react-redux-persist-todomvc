import React from 'react'
import { connect } from 'react-redux'
import addTodo from '../store/actions/addTodo'

class Header extends React.Component {
    saveTodo = e => {
        if (e.keyCode !== 13 || e.target.value === '') return

        this.props.add(document.querySelector('#task').value)
        document.querySelector('#task').value = ''
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    id="task"
                    onKeyDown={this.saveTodo}
                />
            </header>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { add: task => dispatch(addTodo(task)) }
}

export default connect(
    null,
    mapDispatchToProps
)(Header)
