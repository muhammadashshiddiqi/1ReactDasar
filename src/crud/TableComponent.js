import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Table } from "react-bootstrap";
const TableComponent = ({ daftarmakan, editData, hapusData }) => {

    //console.log(makanans);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Makanan</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {daftarmakan.map((makan, index) => {
                    return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{makan.nama_makanan}</td>
                        <td>{makan.desc_makanan}</td>
                        <td>Rp. {makan.harga_makanan}</td>
                        <td>
                            <Button className="btn btn-warning mr-3 " onClick={() => editData(makan.id_makanan)}>Edit</Button> &nbsp;
                            <Button className="btn btn-danger mr-3  " onClick={() => hapusData(makan.id_makanan)}>Hapus</Button>
                        </td>
                    </tr>
                    );
                })}
                
            </tbody>
        </Table>
    )
}

export default TableComponent
