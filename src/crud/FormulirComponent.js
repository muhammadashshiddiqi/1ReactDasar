import React from 'react'
import { Form,Button,Row,Col } from "react-bootstrap";

const FormulirComponent = ({nama_makanan, desc_makanan, harga_makanan, handleSubmit, handleChange, id_makanan}) => {
    return (
        <div>
            <div className="mt-5">
                <Row>
                    <h2>{id_makanan ? "Edit Data" : "Tambah Data" }</h2>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nama_makanan">
                                <Form.Label>Nama Makanan</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="nama_makanan" 
                                    value={nama_makanan}
                                    onChange={(event) => handleChange(event)} 
                                /> 
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="desc_makanan">
                                <Form.Label>Deskripsi</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    name="desc_makanan" 
                                    rows={3} 
                                    value={desc_makanan}
                                    onChange={(event) => handleChange(event)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="harga_makanan">
                                <Form.Label>Harga Makanan</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    name="harga_makanan" 
                                    value={harga_makanan}
                                    onChange={(event) => handleChange(event)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default FormulirComponent
