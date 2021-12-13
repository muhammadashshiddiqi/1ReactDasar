import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan: 'Kangkung'    
        }
    }
    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan: makanan_baru
        })
    }

    // jadi props adalah hasil lemparan state (sifatnya hanya readonly) tidak bisa dirubah
    // state adalah tempat setup data (bisa dirubah / show) tetapi hanya di 1 js
    // dan jika state untuk ngeshow di file lain harus menggunakan props sebagai jalur penghubung
    
    render() {
        return (
            <div>
                <h2>ini manggil state : {this.state.makanan}</h2>
                <button onClick={() => this.gantiMakanan('Cuawngki')}> Ubah Makanan</button>
                <Operan makanan={this.state.makanan} makanBaru={this.gantiMakanan} />
            </div>
        )
    }
}
