import './Navbar.css';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (<AppBar>
        <Toolbar sx={{display: "flex", justifyContent: "space-around", backgroundColor: "red"}}>
            <Typography sx={{fontFamily: "consolas" , color: "black"}}>
                Hardware Store
            </Typography>
            <Button sx={{color: "black", backgroundColor: "white"}}>
                Inicio
            </Button>
            <Button sx={{color: "black", backgroundColor: "white"}}>
                Categorias
            </Button>
            <Button sx={{color: "black", backgroundColor: "white"}}>
                Productos
            </Button>
            <CartWidget />
        </Toolbar>
    </AppBar>);
}

export default Navbar;