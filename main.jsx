import { h, render } from 'preact'
import Counter from "./components/counter";
import Form from "./components/Form";

render((
    <div id="foo">
        <Counter start={10} onChange={(e) => console.log(e)}/>
    </div>
), document.body)