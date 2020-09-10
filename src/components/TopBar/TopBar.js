import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { logout } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import Face from '../../assets/images/face.jpg'
import './topbar.scss';
import { history } from '../../utils'

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
  

function TopBar() {

    const dispatch = useDispatch()
    const classes = useStyles();
    const [openRight, setOpenRight] = React.useState(false);
  
    const toggleDrawer = (open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setOpenRight(open);
    };

    function handleLogout() {
        dispatch(logout())
    }

    function handleProfile() {
        const userLog = localStorage.getItem('user');
        const user = JSON.parse(userLog);

        if (user.user.role == "PATIENT") {
            history.push('/patient');
        } else
            if (user.user.role == "DOCTOR") {
                history.push('/doctor');
            } else
                history.push('/');
    }

    const list = () => (
        <div>
          <List>
              <ListItem button >
                <ListItemText primary='Shopping Cart' />
              </ListItem>
          </List>
          <Divider />
          <List>
            {['1', '2', '3'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

    return (
        <div>
            <div class="jss390">
                <div class="topbar-hold fixed">
                    <div class="flex justify-between items-center h-full">
                        <div class="flex items-center">
                            <button class="MuiButtonBase-root-8112 MuiIconButton-root-8104" tabindex="0" type="button">
                                <span class="MuiIconButton-label-8111">
                                    <span class="material-icons MuiIcon-root-401" aria-hidden="true" onClick={() => handleLogout()}> power_settings_new </span>
                                    <span class="pl-4" hidden> Logout </span>
                                </span>
                                <span class="MuiTouchRipple-root-8122">
                                </span>
                            </button>
                            <button class="MuiButtonBase-root-8231 MuiIconButton-root-8223" tabindex="0" type="button" style={{ color: "rgba(52, 49, 76, 0.54)" }}>
                                <span class="MuiIconButton-label-8230">
                                    <span class="MuiBadge-root-8232">
                                        <React.Fragment key={'right'}>
                                            <span class="material-icons MuiIcon-root-8247" onClick={toggleDrawer('right', true)} aria-hidden="true">shopping_cart</span>
                                            <span class="MuiBadge-badge-8233 MuiBadge-anchorOriginTopRightRectangle-8238 MuiBadge-colorSecondary-8235 MuiBadge-invisible-8246">0</span>
                                            <SwipeableDrawer
                                                anchor={'right'}
                                                open={openRight}
                                                onClose={toggleDrawer(false)}
                                                onOpen={toggleDrawer(true)}
                                            >
                                                {list('right')}
                                            </SwipeableDrawer>
                                        </React.Fragment>
                                    </span>
                                </span>
                                <span class="MuiTouchRipple-root-8256"></span>
                            </button>
                            <div class="inline-block">
                                <div class="MuiAvatar-root-8308 MuiAvatar-circle-8310 cursor-pointer mx-2">
                                    <span class="Logo" aria-hidden="true" onClick={() => handleProfile()}>
                                        <img src={Face} class="MuiAvatar-img-8313" />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar