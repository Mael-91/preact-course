import { h, Component} from "preact";
import { ChromePicker } from 'react-color'

export default class extends Component {

    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
            visible: false
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.visible !== this.state.visible || nextProps.color !== this.props.color;
    }

    render({color, onChange}, {visible}) {
        let element = []
        if (visible) {
            element.push(<button onClick={this.toggleVisibility}>Cacher le color picker</button>)
            element.push(<ChromePicker color={color} onChange={onChange}/>)
        } else {
            element.push(<button onClick={this.toggleVisibility}>Afficher le color picker</button>)
        }
        return element
    }

    toggleVisibility () {
        this.setState({visible: !this.state.visible})
    }
}