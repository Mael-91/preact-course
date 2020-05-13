import { h, Component } from "preact";
import preactCustomElement from "./preact-element.js";

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.handleChange = debounce(this.handleChange.bind(this), 500)
        this.selectHandleChange = this.selectHandleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            value: '',
            selectValue: '1'
        }
    }

    onSubmit (event) {
        let selectValue = null
        if (this.state.selectValue === '1') {
            selectValue =  'Man'
        } else if (this.state.selectValue === '2') {
            selectValue =  'Woman'
        }
        alert("Données envoyées :" + this.state.value + " - " + selectValue);
        event.preventDefault()
    }

    handleChange (event) {
        this.setState({value : event.target.value})
    }

    selectHandleChange (event) {
        this.setState({selectValue: event.target.value})
    }

    render(props, { value, selectValue }) {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={value} onChange={this.handleChange} />
                <select onChange={this.selectHandleChange}>
                    <option value="1">Man</option>
                    <option value="2">Woman</option>
                </select>
                <p>You typed this value: {value}</p>
                 {this.getSelectedValue()}
                <button type="submit">Envoyer</button>
            </form>
        );
    }

    getSelectedValue () {
        if (this.state.selectValue === '1') {
            return <span>Selected value : Man</span>
        } else if (this.state.selectValue === '2') {
            return <span>Selected value : Woman</span>
        } else {
            return <span>Aucune valeur selectionné</span>
        }
    }
}

preactCustomElement(Form, 'test-form')

export function debounce(callback, delay) {
    let timer;
    return function () {
        const context = this
        const args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            callback.apply(context, args)
        }, delay)
    }
}