import Head from 'next/head'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from '../components/NewsCard';
import { useState } from 'react';

const dummyArticleData = [
  {
      source: [Object],
      author: 'Canadian Press',
      title: 'Edmonton’s CFL franchise changes team name to ‘Elks’ - Sportsnet.ca',
      description: 'The Edmonton football team will now be known as the Edmonton Elks, the team announced Tuesday.',
      url: 'https://www.sportsnet.ca/cfl/article/edmontons-cfl-franchise-changes-team-name-elks/',
      urlToImage: 'https://www.sportsnet.ca/wp-content/uploads/2021/06/elks.jpg',
      publishedAt: '2021-06-01T16:10:00Z',
      content: 'EDMONTON — The Edmonton CFL franchise has changed its team name to Elks.\r\n' +
        'The club made the announcement via livestream today.\r\n' +
        'Edmonton dropped its longtime name, Eskimos, last year following a simi… [+2432 chars]'
    },
    {
      source: [Object],
      author: 'Ted Raymond',
      title: 'Ottawa sees fewer than 40 new COVID-19 cases for second day in a row - CTV Edmonton',
      description: 'Ottawa Public Health is reporting fewer than 40 new COVID-19 cases for the second day in a row.',
      url: 'https://ottawa.ctvnews.ca/ottawa-sees-fewer-than-40-new-covid-19-cases-for-second-day-in-a-row-1.5451225',
      urlToImage: 'https://www.ctvnews.ca/polopoly_fs/1.5047161.1596818391!/httpImage/image.png_gen/derivatives/landscape_620/image.png',
      publishedAt: '2021-06-01T16:09:00Z',
      content: 'OTTAWA -- \r\n' +
        'Ottawa Public Health is reporting fewer than 40 new COVID-19 cases for the second day in a row.\r\n' +
        'The public health unit said Tuesday that 39 more people had tested positive for COVID-19, … [+8749 chars]'
    },
    {
      source: [Object],
      author: null,
      title: "Reacting to Kevin Garnett & Glen Davis blasting Kyrie for stomping on the Celtics' logo | First Take - ESPN",
      description: null,
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9N3FqQ3lKZ2pLQXPSAQA?oc=5',
      urlToImage: null,
      publishedAt: '2021-06-01T15:44:50Z',
      content: null
    },
    {
      source: [Object],
      author: 'Canadian Press',
      title: 'Edmonton’s CFL franchise changes team name to ‘Elks’ - Sportsnet.ca',
      description: 'The Edmonton football team will now be known as the Edmonton Elks, the team announced Tuesday.',
      url: 'https://www.sportsnet.ca/cfl/article/edmontons-cfl-franchise-changes-team-name-elks/',
      urlToImage: 'https://www.sportsnet.ca/wp-content/uploads/2021/06/elks.jpg',
      publishedAt: '2021-06-01T16:10:00Z',
      content: 'EDMONTON — The Edmonton CFL franchise has changed its team name to Elks.\r\n' +
        'The club made the announcement via livestream today.\r\n' +
        'Edmonton dropped its longtime name, Eskimos, last year following a simi… [+2432 chars]'
    },
    {
      source: [Object],
      author: 'Ted Raymond',
      title: 'Ottawa sees fewer than 40 new COVID-19 cases for second day in a row - CTV Edmonton',
      description: 'Ottawa Public Health is reporting fewer than 40 new COVID-19 cases for the second day in a row.',
      url: 'https://ottawa.ctvnews.ca/ottawa-sees-fewer-than-40-new-covid-19-cases-for-second-day-in-a-row-1.5451225',
      urlToImage: 'https://www.ctvnews.ca/polopoly_fs/1.5047161.1596818391!/httpImage/image.png_gen/derivatives/landscape_620/image.png',
      publishedAt: '2021-06-01T16:09:00Z',
      content: 'OTTAWA -- \r\n' +
        'Ottawa Public Health is reporting fewer than 40 new COVID-19 cases for the second day in a row.\r\n' +
        'The public health unit said Tuesday that 39 more people had tested positive for COVID-19, … [+8749 chars]'
    },
    {
      source: [Object],
      author: null,
      title: "Reacting to Kevin Garnett & Glen Davis blasting Kyrie for stomping on the Celtics' logo | First Take - ESPN",
      description: null,
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9N3FqQ3lKZ2pLQXPSAQA?oc=5',
      urlToImage: null,
      publishedAt: '2021-06-01T15:44:50Z',
      content: null
    },
]

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
// export const getStaticProps = async () => {
  
//   const pageSize = 5 // number of articles to get

//     // 1. fetch request, return response obj
//     const res = await fetch('https://newsapi.org/v2/top-headlines?country=ca&pageSize=${pageSize}&apiKey=4331fef02cae48559a06c6f79d0d66c8');
//     // 2. parse it to json, return array of obj
//     const data = await res.json();
//     const topArticles = data?.articles;
//     console.log(data)
//     // 3. will be passed to the page component as props 
//     return {
//         props: { topArticles,}
//     }
// }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '50px',
    },
    title: {
        marginTop: '4px',
    },
}))



// const Home = ( props ) => {

//     const classes = useStyles();
//     const articles = props.topArticles;

//     return ( 
//       <>
//         <Head>
//           <title>Simple News App</title>
//           <meta name="description" content="Simple News App created by Nextjs." />
//       </Head>
//         <Grid container className={classes.root}>
//             <Grid item xs={10} style={{margin: 'auto'}}>
//                 <Typography variant="h4" className={classes.title} >Headlines</Typography>
//             </Grid>
//             <Grid item xs={10} style={{margin: 'auto'}}>
//                  {articles.map((article,index )=> (
//                     <div key={index}>
//                         <NewsCard
//                             title={article.title}
//                             publishedAt = {article.publishedAt}
//                             urlToImage={article.urlToImage} 
//                             url={article.url}/>
//                     </div>
//                 ))}
//             </Grid>
//         </Grid>
//         </>
//      );
// }
 
// export default Home;

const Home = (  ) => {

    const classes = useStyles();
    
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
                 {dummyArticleData.map((article,index )=> (
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
        </>
     );
}
 
export default Home;