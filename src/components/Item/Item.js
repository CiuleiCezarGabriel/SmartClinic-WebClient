import React, { useState } from 'react'

import './item.scss'

function Item(props) {
    const price = props.price;
    const name = props.name;
    const imagine = props.img;
    return (
        <div>
            
            <div class="flex justify-center items-center relative">
                <span class="product-price font-medium bg-primary text-white py-1 px-3 m-0">${price}</span>
                <img class="w-full" src={imagine} alt="Name" />
                <div class="image-box-overlay flex justify-centere items-center">
                    <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined bg-default" tabindex="0" type="button">
                        <span class="MuiButton-label">
                            <span class="material-icons MuiIcon-root mr-2" aria-hidden="true">shopping_cart</span>
                            <span>Add to prescription</span>
                        </span>
                        <span class="MuiTouchRipple-root"></span>
                    </button>
                </div>
            </div>
            <div class="p-6">
                <h5 class="m-0">{name}</h5>
            </div>
        </div>
    )

}

export default Item