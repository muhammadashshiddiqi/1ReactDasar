import React, { Component } from 'react'
import FormulirComponent from './FormulirComponent'
import NavbarComponent from './NavbarComponent'
import TableComponent from './TableComponent'

export default class Crud extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            makanans : [],
            nama_makanan : "",
            desc_makanan : "",
            harga_makanan : 0,
            id_makanan : "",
        }
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.id_makanan === ""){
            this.setState({
                makanans: [
                    ...this.state.makanans,
                    {
                        id_makanan: this.state.makanans.length + 1,
                        nama_makanan: this.state.nama_makanan,
                        desc_makanan: this.state.desc_makanan,
                        harga_makanan: this.state.harga_makanan
                    }
                ]
            });
        }else{
            const makanan_selaindipilih = this.state.makanans
                .filter((makan) => makan.id_makanan !== this.state.id_makanan)
                .map((filterMakan) => {
                    return filterMakan
                })
            
            this.setState({
                makanans: [
                    ...makanan_selaindipilih,
                    {
                        id_makanan: this.state.makanans.length + 1,
                        nama_makanan: this.state.nama_makanan,
                        desc_makanan: this.state.desc_makanan,
                        harga_makanan: this.state.harga_makanan
                    }
                ]
            });
        }
        

        this.setState({
            nama_makanan: "",
            desc_makanan: "",
            harga_makanan: 0,
            id_makanan: "",
        })
    }

    editData = (id) => {
        const makanan_yangdipilih = this.state.makanans
            .filter((makan) => makan.id_makanan === id)
            .map((filterMakan) => {
                return filterMakan
            })

        this.setState({
            nama_makanan: makanan_yangdipilih[0].nama_makanan,
            desc_makanan: makanan_yangdipilih[0].desc_makanan,
            harga_makanan: makanan_yangdipilih[0].harga_makanan,
            id_makanan: makanan_yangdipilih[0].id_makanan
        })
    }

    hapusData = (id) => {
        const makanan_baru = this.state.makanans
            .filter((makan) => makan.id_makanan !== id)
            .map((filterMakan) => {
                return filterMakan
            })
        this.setState({
            makanans: makanan_baru
        })
    }
    
     render() {
         //console.log(this.state.makanans);
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <TableComponent daftarmakan={this.state.makanans} editData={this.editData} hapusData={this.hapusData}/>
                    <FormulirComponent {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
