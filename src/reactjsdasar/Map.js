import React from 'react'
const barang = [
    {
        nama: 'Sepatu',
        harga: 100000
    },
    {
        nama: 'Galon',
        harga: 50000
    },
    {
        nama: 'Sendal',
        harga: 25000
    },
    {
        nama: 'Laptop',
        harga: 2000000
    },
    {
        nama: 'Mouse',
        harga: 30000
    },
];
const total_harga = barang.reduce((total_harga, item) => {
    return total_harga+item.harga
}, 0);

const Map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {barang.map((item) => (
                    <li> Nama Barang : {item.nama}, Harga : {item.harga}</li>
                ))}

            </ul>

            <h2>Map Sederhana Kalo pakai index</h2>
            <ul>
                {barang.map((item, index) => (
                    <li>{index + 1} Nama Barang : {item.nama}, Harga : {item.harga}</li>
                ))}

            </ul>

            <h2>Map Filter Sederhana yang lebih dari lebih sama dengan 50.000</h2>
            <ul>
                
                {barang
                .filter((itembarang) => itembarang.harga >= 50000)
                .map((item) => (
                    <li> Nama Barang : {item.nama}, Harganya : {item.harga}</li>
                ))}
            </ul>
            <h3>Total Harga Sederhana {total_harga}</h3>
        </div>
    )
}

export default Map
