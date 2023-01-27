import React,{useState,useEffect} from 'react'
import Articlecomponent from "./Articlecomponent"
import ArticleSkeleton from './ArticleSkeleton';
import InfiniteScroll from 'react-infinite-scroller';
function Content() {
  const[articles,setArticle] = useState(null)

  // useEffect(() => {
    

    // const handleScroll = () => {
    //   const html = document.documentElement;
    //   const body = document.body;
    //   const windowheight =
    //     "innerHeight" in window ? window.innerHeight : html.offsetHeight;

    //   const docHeight = Math.max(
    //     body.scrollHeight,
    //     body.offsetHeight,
    //     html.clientHeight,
    //     html.scrollHeight,
    //     html.offsetHeight
    //   );

    //   const windowBottom = windowheight + window.pageYOffset;
    //   if (windowBottom >= docHeight) {
    //     console.log("we reached the bottom");
    //     fetchAgain();
    //   }
    // };

    // window.addEventListener("scroll", handleScroll);

    // return () => window.removeEventListener("scroll", handleScroll);
 // }, [articles]);


  const fetchAgain = () => {
    if (articles != null) {
      fetch("https://dev.to/api/articles")
        .then((res) => res.json())
        .then((result) => setArticle([...articles, ...result]));
    }
  };

  // useEffect(()=>{
  //   setTimeout(async ()=>{
  //     const res = await fetch("https://dev.to/api/articles")
  //     const data = await res.json()
  //     console.log(data);
  //     setArticle(data)
  //   },2000);
  // }, [])
  
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://dev.to/api/articles");
      const data = await res.json();
      setArticle(data);
      console.log(data);
    }, 2000);
  }, []);

  return (
    <>
    <main className='content'>
    <header className='content-header'>
      <a href="">Relevent</a>
      <a href="">Latest</a>
      <a href="">Top</a>
    </header>
    <div>
    <InfiniteScroll
    pageStart={0}
    loadMore={fetchAgain}
    hasMore={true || false}
    loader={<div className="loader" key={0}></div>}
>
{articles && articles.map((article, id)=>{
return <Articlecomponent key={id} data ={article}/>
        })  

              }        </InfiniteScroll>

     
      { !articles &&
[1,2,3,4,5].map(()=>{
  return <ArticleSkeleton/>
})
      
      }
    </div>
    </main>
    </>
  )
}

export default Content