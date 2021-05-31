import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const NewsCard = ( props ) => {
  const { title, time } = props;

    return ( 
        <Card variant="outlined" style={{margin: '20px'}}>  
          <CardContent>
              <Typography variant="h6">{title}</Typography>
              <Typography variant="caption">{time}</Typography>
          </CardContent>
        </Card>
    
     );
}
 
export default NewsCard;