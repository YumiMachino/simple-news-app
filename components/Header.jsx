import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },  
    title: {
        flexGrow: 1,
    },
}))

const Header = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon />
                     </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Simple News
                    </Typography>
                    <Button color="inherit">Top Stories</Button>
                    <Button color="inherit">Business</Button>
                    <Button color="inherit">Technology</Button>
                    <Button color="inherit">Entertainment</Button>
                    <Button color="inherit">Sports</Button>
                </Toolbar>
            </AppBar>

        </div>
      
     );
}
 
export default Header;