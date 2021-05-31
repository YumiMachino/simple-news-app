import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from './NewsCard';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '50px',
    },
    
}))



const Headline = () => {
    const classes = useStyles();

    return ( 
        <Grid container className={classes.root}>
            <Grid item xs={10} style={{margin: 'auto'}}>
                <Typography variant="h4" >Headlines</Typography>
            </Grid>
            <Grid item xs={10} style={{margin: 'auto'}}>
                <NewsCard />
            </Grid>

        </Grid>
        
     );
}
 
export default Headline;