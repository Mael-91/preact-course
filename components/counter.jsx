import { h, Component} from "preact";
import ToggleColorPicker from "./ToggleColorPicker";

export default class Counter extends Component {

    constructor(props) {
        super(props)
        this.pause = this.pause.bind(this)
        this.play = this.play.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.state = {
            count: props.start,
            timer: null,
            color: '#ff0000'
        }
    }

    componentDidMount() {
        this.play()
    }

    componentWillUnmount() {
        window.clearInterval(this.state.timer)
    }

    render ({start}, {count, color}) {
        return <div class="demo" style={{color}}>
            Début : {start}<br/>
            Compteur : {count}<br/>
            {this.renderButton()}
            <ToggleColorPicker color={color} onChange={this.changeColor}/>
        </div>
    }

    renderButton () {
        if (this.state.timer === null) {
            return <button onClick={this.play}>Play</button>
        } else {
            return <button onClick={this.pause}>Pause</button>
        }
    }

    pause () {
        window.clearInterval(this.state.timer)
        this.setState({timer: null})
    }

    play () {
        let timer = setInterval(() => {
            this.setState({count: this.state.count + 1})
            this.props.onChange(this.state.count)
        }, 1000)
        this.setState({timer})
    }

    changeColor (color) {
        this.setState({color: color.hex})
    }
}