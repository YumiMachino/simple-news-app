import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F50057",
        flexGrow: 1,
        height: '65px',
        textAlign: 'center',
    },
    title: {
        flexGrow: 1,
        color: 'white',
    },
}))

const Footer = () => {
    const classes = useStyles();

    return ( 
        <Grid container className={classes.root}>
            <Grid item xs={12} style={{paddingTop: '20px', paddingBottom: '20px'}}> 
                 <Typography variant='subtitle2' color="inherit" className={classes.title}>Copyright 2021 SimpleNews</Typography>
            </Grid>
        </Grid>
        
      
     );
}
 
export default Footer;