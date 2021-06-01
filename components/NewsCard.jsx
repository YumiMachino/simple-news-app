import { CardActionArea, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const NewsCard = ( props ) => {
  const { title, publishedAt, urlToImage, url } = props;

    return ( 
        <Card variant="outlined" style={{margin: '20px'}}>  
          <CardActionArea href={url}>
              <CardContent>
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="caption">{publishedAt}</Typography>
              </CardContent>
              <CardMedia component="img" alt={title} src={urlToImage} title={title} style={{height: '100px'}}/>
          </CardActionArea>
        </Card>
     );
}
 
export default NewsCard;
