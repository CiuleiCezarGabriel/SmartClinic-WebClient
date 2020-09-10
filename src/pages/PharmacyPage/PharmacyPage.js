import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import { addPharmacy, fetchPharmacies, deletePharmacy, addNewDrugToPharmacy } from '../../actions'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function PharmacyPage() {

    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const loggedAdmin = useSelector(state => state.authentification.loggedAdmin)
    const [pharmacy, setPharmacy] = useState(
        {
            name: '',
            description: '',
            location: '',
            id: ''
        }
    )

    const [drug, setDrug] = useState({
        name: ' ',
        description: ' ',
        quantity: ' ',
        price: ' '
    })

    useEffect(() => {
        dispatch(fetchPharmacies())
    }, [])

    const pharmacies = useSelector(state => state.pharmacies.data)

    useEffect(() => {
        setState({
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Location', field: 'location' },
                { title: 'Phone', field: 'phone' },
            ],
            data: pharmacies.map(pharmacy => {
                if (pharmacy === null) {
                    return {
                        name: ' ',
                        location: ' ',
                        phone: ' '
                    }
                }
                return {
                    name: pharmacy.name,
                    location: pharmacy.location,
                    phone: pharmacy.phone,
                    id: pharmacy._id
                }

            })
        })
    }, [pharmacies])

    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Location', field: 'location' },
            { title: 'Phone', field: 'phone' },
        ],
        data: pharmacies.map(pharmacy => {
            if (pharmacy === null) {
                return {
                    name: ' ',
                    location: ' ',
                    phone: ' '
                }
            }
            return {
                name: pharmacy.name,
                location: pharmacy.location,
                phone: pharmacy.phone,
                id: pharmacy._id
            }
        })
    });

    function handleAddPharmacy(data) {
        addPharmacy(data)
    }

    function handleDelete(id) {
        dispatch(deletePharmacy(id))
    }

    function handleSubmit() {
        dispatch(addNewDrugToPharmacy(pharmacy.id, drug))
        handleClose()
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setDrug(pharmacy => ({ ...pharmacy, [name]: value }));
    }

    return (
        <div>
            {loggedAdmin
                &&
                <div>
                    <MaterialTable
                        title="Pharmacies"
                        columns={state.columns}
                        data={state.data}
                        actions={


                            [{
                                icon: 'addcircle',
                                tooltip: 'Add drug',
                                onClick: (event, data) => { handleShow(), setPharmacy(data) }
                            }]
                        }
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();

                                        const name = newData.name
                                        const location = newData.location
                                        const phone = newData.phone

                                        const pharmacy = {
                                            name: name,
                                            location: location,
                                            phone: phone
                                        }

                                        handleAddPharmacy(pharmacy)
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        handleDelete(oldData.id)
                                    }, 600);
                                }),
                        }}
                    />

                    <div>
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text bg-light-primary hover-bg-primary text-primary px-5 MuiButton-textSizeSmall MuiButton-sizeSmall" type="button">
                            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add new drug to {pharmacy.name} </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="show-grid">
                                    <Container>
                                        <Row>
                                            <Col xs={12} md={8}>
                                                <div>
                                                    <h5> Rating: </h5>
                                                </div>
                                            </Col>
                                            <Col xs={6} md={4}>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={10} md={4}>
                                                <label>Name</label>
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <input id="nameId" name="name" value={drug.name} onChange={handleChange}></input>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={10} md={4}>
                                                <label>Description</label>
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <input id="descriptionId" name="description" value={drug.description} onChange={handleChange}></input>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={10} md={4}>
                                                <label>Quantity</label>
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <input id="quantityId" name="quantity" value={drug.quantity} onChange={handleChange}></input>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={10} md={4}>
                                                <label>Price</label>
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <input id="priceId" name="price" value={drug.price} onChange={handleChange}></input>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleSubmit}>Add Review</Button>
                                </Modal.Footer>
                            </Modal>
                            <span class="MuiTouchRipple-root">
                            </span>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default PharmacyPage