import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import { addPharmacy, fetchPharmacies } from '../../actions'

function PharmacyPage() {

    const dispatch = useDispatch()

    const [pharmacies, setPharmacies] = useState(useSelector(state => state.pharmacies.data))

    useEffect(() => {
        dispatch(fetchPharmacies())
    }, [])
    console.log(pharmacies)
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Location', field: 'location' },
            { title: 'Phone', field: 'phone' },
        ],
        data: pharmacies.map(pharmacy => {
            return {
                name: pharmacy.name,
                location: pharmacy.location,
                phone: pharmacy.phone
            }
        })
    });

    function handleAddPharmacy(pharmacy){
        dispatch(addPharmacy(pharmacy))
    }

    return (
        <MaterialTable
            title="Pharmacies"
            columns={state.columns}
            data={state.data}
            // actions={
            //     [{
            //         icon: 'save',
            //         tooltip: 'Add pharmacy',
            //         onClick: (event, data) => { addPharmacy(data) }
            //     }]
            // }
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
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    )
}

export default PharmacyPage