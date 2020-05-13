import { h, Component } from "preact";

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this)
        this.state = {
            items: []
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.data !== this.props.data
    }

    render() {
        return <div>
            {this.getData()}
        </div>
    }

    getData () {
        let item = this.state.items
        let data = this.props.data
        item.push({data})
        this.setState({items: item})
        let items = this.state.items
        let list = items.map((item) => {
            return <li>{item.data}</li> // onclick pour supprimer un todo
        })
        console.log(list)
        return list
    }
}