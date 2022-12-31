import React,{useState,useEffect} from 'react'
import Articlecomponent from "./Articlecomponent"
function Content() {
  const[articles,setArticle] = useState(null)

  useEffect(() => {
    const fetchAgain = () => {
      if (articles != null) {
        fetch("https://dev.to/api/articles")
          .then((res) => res.json())
          .then((result) => setArticle([...articles, ...result]));
      }
    };

    const handleScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      const windowheight =
        "innerHeight" in window ? window.innerHeight : html.offsetHeight;

      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const windowBottom = windowheight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        console.log("we reached the bottom");
        fetchAgain();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles]);

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
      {
        articles && articles.map((article, id)=>{
return <Articlecomponent key={id} data ={article}/>
        })
      }
    </div>
    </main>
    </>
  )
}

export default Content