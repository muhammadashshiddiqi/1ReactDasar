import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle';

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             makanan : 'bakso',
             datajson : {},
             tampilHalamanSub: false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    datajson: json
                });
            });
    }

    ubahMakanan = (val) => {
        this.setState({
            makanan: val
        })
    }
    getclick = () => {
        this.setState({ 
            tampilHalamanSub: !this.state.tampilHalamanSub 
        })
    }
    
    render() {
        console.log(this.state.datajson);
        return (
            <div>
                <h2>KONSEP LIFECYCLE REACT_JS</h2>
                <h3>ini adalah title {this.state.datajson.title}</h3>

                <h4>__________________________________________________________________________________</h4>
                <h3>{this.state.makanan}</h3>
                {this.state.tampilHalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}

                <button onClick={this.getclick}>Tampilkan Halaman Sub</button>
            </div>
        )
    }
}
