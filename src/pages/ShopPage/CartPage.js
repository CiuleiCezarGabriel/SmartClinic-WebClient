import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCart } from '../../actions'
import { history } from '../../utils'

function CartPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.authentification.user)

    useEffect(() => {
        dispatch(createCart({ user: user._id })).then(res => console.log(res));
    }, [])

    history.push('/Shop');
    return (
        <div>
            Creating cart..
        </div>
    )
}

export default CartPage;