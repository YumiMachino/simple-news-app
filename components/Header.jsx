import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    headerColor: {
        backgroundColor: `${theme.palette.primary.A700};`,
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
            <AppBar position="static" className={classes.headerColor}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon />
                     </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Simple News
                    </Typography>
                    <Button color="inherit" href="/">Top Stories</Button>
                    <Button color="inherit" href="/topics/business">Business</Button>
                    <Button color="inherit" href="/topics/technology">Technology</Button>
                    <Button color="inherit" href="/topics/entertainment">Entertainment</Button>
                    <Button color="inherit" href="/topics/sports">Sports</Button>
                </Toolbar>
            </AppBar>

        </div>
      
     );
}
 
export default Header;