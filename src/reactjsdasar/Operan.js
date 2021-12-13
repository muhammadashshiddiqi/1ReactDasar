import React, { Component } from 'react'

export default class Operan extends Component {
    
    render() {
        const { makanBaru, makanan } = this.props
        return (
            <div>
                <h3>-----------------------------------------------------------------------------------------------------------</h3>
                <h2>INI OPERAN STATE YANG MENJADI PROPS : {makanan}</h2>

                <button onClick={() => makanBaru('Cuawngki')}> Ubah Makanan Via Function State</button>
            </div>
        )
    }
} 
