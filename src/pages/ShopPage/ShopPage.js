import React, {useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import DrugPage from '../../components/Drugs/DrugPage'
import {createCart, addDrugToCart, fetchCartByUser, fetchDrugsByCart} from '../../actions'

function ShopPage(){
    const dispatch = useDispatch();

    const user = useSelector(state => state.authentification.user);
    
    useEffect(()=>{
        dispatch(fetchCartByUser(user._id))
    },[])

     const obj = useSelector(status => status.shopping.cart_obj[0]);
     console.log(obj);
    return(
        <div>
            <DrugPage elem = "Add to Cart"/>
        </div>
    )
}

export default ShopPage;