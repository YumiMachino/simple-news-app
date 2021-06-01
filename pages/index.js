import Head from 'next/head'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from '../components/NewsCard';
import { useState } from 'react';

/* Practice: JSONPlaceholder(https://jsonplaceholder.typicode.com)

// fetch data here: Runs at build time before rendering on server-side.
export const getStaticProps = async () => {

    // 1. fetch request, return response obj
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // 2. parse it to json, return array of obj
    const data = await res.json();
    
    // 3. will be passed to the page component as props 
    return {
        props: { posts: data }
    }
}
*/

// Get top articles on NewsAPI
export const getStaticProps = async () => {
  
  const pageSize = 5 // number of articles to get

    // 1. fetch request, return response obj
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=ca&pageSize=${pageSize}&apiKey=4331fef02cae48559a06c6f79d0d66c8');
    // 2. parse it to json, return array of obj
    const data = await res.json();
    const topArticles = data?.articles;
    console.log(data)
    // 3. will be passed to the page component as props 
    return {
        props: { topArticles,}
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


const Home = ( props ) => {

    const classes = useStyles();
    const articles = props.topArticles;

    return ( 
      <>
        <Head>
          <title>Simple News App</title>
          <meta name="description" content="Simple News App created by Nextjs." />
      </Head>
        <Grid container className={classes.root}>
            <Grid item xs={10} style={{margin: 'auto'}}>
                <Typography variant="h4" className={classes.title} >Headlines</Typography>
            </Grid>
            <Grid item xs={10} style={{margin: 'auto'}}>
                 {articles.map((article,index )=> (
                    <div key={index}>
                        <NewsCard
                            title={article.title}
                            publishedAt = {article.publishedAt}
                            headImage={article.urlToImage} />
                    </div>
                ))}
            </Grid>
        </Grid>
        </>
     );
}
 
export default Home;