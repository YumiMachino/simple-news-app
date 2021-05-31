import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const NewsCard = () => {
    return ( 
        <Card variant="outlined">  
          <CardContent>
              <Typography variant="h6">News headlines</Typography>
              <Typography variant="caption">hours</Typography>
          </CardContent>
        </Card>
    
     );
}
 
export default NewsCard;