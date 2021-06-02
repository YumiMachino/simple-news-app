import { CardActionArea, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      margin: '20px',
      borderRadius: '14px',
    },
    cardStyle: {
      display: 'flex',
      flexDirection: 'row',
    },
    contentStyle: {
      flexGlow: 1,
    },
    imageStyle: {
      width: '30%',
      margin: '8px',
    },
}))

const NewsCard = ( props ) => {
  const classes = useStyles();

  const { title, publishedAt, urlToImage, url } = props;

    return ( 
        <Card variant="outlined" className={classes.root}>  
          <CardActionArea href={url} className={classes.cardStyle}>
              <CardContent className={classes.contentStyle}>
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="caption">{publishedAt}</Typography>
              </CardContent>
                <CardMedia component="img" alt="photo of the news" src={urlToImage} title={title} className={classes.imageStyle}/>
          </CardActionArea>
        </Card>
     );
}
 
export default NewsCard;
