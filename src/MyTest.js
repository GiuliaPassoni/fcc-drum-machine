import React, {Component} from "react";

class MyTest extends Component{
    constructor(props) {
        super(props);
//     this is bad practice
        this.f=props.f
        this.data=props.data
    }
    handleClick(event){
        // console.log('here this'+this.state.test +' abbbbbbb')
        let key = document.getElementById(this.data.keyTrigger);
        key.play()
        this.f(this.data.id)
    }

    render() {
        // let name = this.data.id
        // console.log('name is',name)
        return(
            <button id={'b-'+this.data.keyCode} className='drum-pad'
                    onClick={this.handleClick.bind(this)}
                    onKeyDown={this.handleKeyPress}>
                {this.data.keyTrigger}
                <audio className='clip'
                       id={this.data.keyTrigger}
                       src={this.data.url}></audio></button>
        )
    }
}

export default MyTest;