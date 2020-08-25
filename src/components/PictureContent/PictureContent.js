import React from 'react';
import { logout } from '../../actions';
import { useDispatch } from 'react-redux';
import './picturecontent.scss';
import { history } from '../../utils';

function PictureContent() {

    return (
        <div>
            <div class="m-sm-30">
                <div class="MuiPaper-root MuiCard-root px-6 py-5 h-full MuiPaper-elevation6 MuiPaper-rounded">
                    {/*<div class="card-title mb-4">Make me pretty</div>*/}
                        
                </div>
            </div>
        </div>
    )
}

export default PictureContent;