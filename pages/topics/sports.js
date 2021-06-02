import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from '../../components/NewsCard';
import { useState } from 'react';

// Get sports articles on NewsAPI
export const getStaticProps = async () => {
  
  const pageSize = 5 // number of articles to get

    // 1. fetch request, return response obj
    const res = await fetch('https://newsapi.org/v2/everything?q=sports&pageSize=${pageSize}&apiKey=4331fef02cae48559a06c6f79d0d66c8');
    // 2. parse it to json, return array of obj
    const data = await res.json();
    const sportsArticles = data?.articles;
    // 3. will be passed to the page component as props 
    return {
        props: { sportsArticles,}
         , revalidate: 60 * 10,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '50px',
    },
    title: {
        marginTop: '4px',
    },
}))


const sports = (props) => {
    const classes = useStyles();
    const articles = props.sportsArticles;

    return ( 
        <Grid container className={classes.root}>
            <Grid item xs={10} style={{margin: 'auto'}}>
                <Typography variant="h4" className={classes.title} >Sports</Typography>
            </Grid>
            <Grid item xs={10} style={{margin: 'auto'}}>
                 {articles.map((article,index )=> (
                    <div key={index}>
                        <NewsCard
                            title={article.title}
                            publishedAt = {article.publishedAt}
                            urlToImage={article.urlToImage} 
                            url={article.url}/>
                    </div>
                ))}
            </Grid>
        </Grid>
     );
}
 
export default sports;