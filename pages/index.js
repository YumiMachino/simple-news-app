import Head from 'next/head'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from '../components/NewsCard';


// fetch data here. Runs at build time before rendering
export const getStaticProps = async () => {

    // 1. fetch request, return response obj
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // 2. parse it to json, return array of obj
    const data = await res.json();

    // 3. return the data as props
    return {
        props: { posts: data }
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


// export default function Home({ posts }) {
//   const classes = useStyles();

//   return (
//     <div>
//       <Head>
//         <title>Simple News App</title>
//         <meta name="description" content="Simple News App created by Nextjs." />
//       </Head>

//       <Grid container className={classes.root}>
//           <Grid item xs={10} style={{margin: 'auto'}}>
//               <Typography variant="h4" className={classes.title} >Headlines</Typography>
//            </Grid>
//           <Grid item xs={10} style={{margin: 'auto'}}>
//               {posts.map(post => (
//                   <div key={post.id}>
//                         <NewsCard
//                             title={post.title}
//                             time = {post.body} />
//                     </div>
//                 ))}
//             </Grid>
//         </Grid> 
      
//     </div>
//   )
// }

const Home = ({ posts }) => {

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
                {posts.map(post => (
                    <div key={post.id}>
                        <NewsCard
                            title={post.title}
                            time = {post.body} />
                    </div>
                ))}
            </Grid>
        </Grid>
        </>
     );
}
 
export default Home;