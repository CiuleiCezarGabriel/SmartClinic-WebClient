import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { addDrugPrescription } from '../../actions'
import './item.scss'

const useStyles = makeStyles((theme) => ({
    appBar: { position: 'relative' },
    title: { marginLeft: theme.spacing(2), flex: 1 },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Item(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const diagnosis_obj = useSelector(state => state.diagnosis.data);

    const price = props.price;
    const name = props.name;
    const imagine = props.img;
    const drug_id = props.drug_id;
    const addElement = props.elem;

    const [open, setOpen] = useState(false);
    const [drugQuantity, setDrugQuantity] = useState('');
    const [drugInstrunctions, setDrugInstrunctions] = useState('');
    const [add_obj, setAdd_obj] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleClickAdd(e){
        if(addElement === 'Add to Cart'){
           
        }else
            if(addElement === 'Add to prescription'){
                handleAddToPrescription(e);
            }
    }

    
    function handleAddToPrescription(e) {
        const elem = e.target.textContent;
        const elem_id = elem.substring(19, 43);
        const elem_name = elem.substring(43, elem.length)

        setAdd_obj({
            name: elem_name,
            drug: elem_id
        });

        handleClickOpen()
    }

    const handleAddDrugPrescription = () =>{
        
        const add_obj2 ={
            instructions: drugInstrunctions,
            quantity: drugQuantity
        }

        const objToBeAdd = {
            name: add_obj.name,
            instructions: add_obj2.instructions,
            quantity: add_obj2.quantity,
            drug: add_obj.drug,
            diagnosis: diagnosis_obj._id
        }
        console.log(objToBeAdd);
       
        dispatch(addDrugPrescription(objToBeAdd));
        handleClose();
    }


    return (
        <div>
            <div class="flex justify-center items-center relative">
                <span class="product-price font-medium bg-primary text-white py-1 px-3 m-0">${price}</span>
                <img class="w-full" src={imagine} alt="Name" />
                <div class="image-box-overlay flex justify-centere items-center">
                    <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined bg-default" tabindex="0" type="button">
                        <span class="MuiButton-label">
                            <span class="material-icons MuiIcon-root mr-2" aria-hidden="true">shopping_cart</span>
                            <span onClick={(e) => handleClickAdd(e)}>{addElement}
                            <span hidden>{drug_id}</span>
                                <span hidden>{name}</span>
                            </span>
                        </span>
                        <span class="MuiTouchRipple-root"></span>
                    </button>
                </div>
            </div>
            <div class="p-6">
                <h5 class="m-0">{name}</h5>
            </div>

        <Dialog fullWidth open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Add specifications
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleAddDrugPrescription}>
                        Save
                    </Button>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem button>
                    <div class="form-label">
                        <ListItemText primary="Drug prescription quantity:" />
                    </div>
                    <div class='form-text-name'>
                        <TextField onChange={(e) => setDrugQuantity(e.target.value)} />
                    </div>
                </ListItem>
                <Divider />
                <ListItem button>
                    <div class='form-label' >
                        <ListItemText primary="Drug prescription instrunctions:" />
                    </div>
                    <div class='form-text-description'>
                        <TextField onChange={(e) => setDrugInstrunctions(e.target.value)} multiline
                            rows={1}
                            rowsMax={6} />
                    </div>
                </ListItem>
            </List>
        </Dialog>
        </div>
    )

}

export default Item