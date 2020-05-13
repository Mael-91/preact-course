import { h, Component } from "preact";
import preactCustomElement from "../preact-element";
import TodoList from "./TodoList";

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {
            value: '',
            submittedTask: ''
        }
    }

    onSubmit (event) {
        event.preventDefault()
        this.setState({submittedTask: this.state.value})
    }

    onChange (event) {
        this.setState({value: event.target.value})
    }

    render(props, {value, submittedTask}, context) {
        return <div>
            <form onSubmit={this.onSubmit}>
                <label name="inputodo">Ajouter un todo</label>
                <input type="text" value={value} name="test" onChange={this.onChange}/>
                <button onClick={this.onSubmit}>Envoyer</button>
            </form>
            <TodoList data={submittedTask}/>
        </div>
    }
}

preactCustomElement(Todo, 'todo-widget')