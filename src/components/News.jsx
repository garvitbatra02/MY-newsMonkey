import React, { useEffect ,useState} from "react";
// import Dropdownmenu from "./Dropdownmenu";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'

import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';



const News=(props)=>{
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalnews, settotalnews] = useState(0);

 
  
  const handleclick=async ()=>{
    props.setProgress(0);
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f0d6743ee9894d40bde34627ec0fd8f2&page=${page}&pagesize=${props.pagesize}`;
    setloading(true);

  props.setProgress(30);
  let data = await fetch(url);
  let parsedata = await data.json();
  props.setProgress(50);

  // this.setState({articles:parsedata.articles,totalnews:parsedata.totalResults});
  //     this.setState({loading:false});
  // props.setProgress(100);
    setarticles(parsedata.articles);
    settotalnews(parsedata.totalResults);
    setloading(false);
    props.setProgress(100);
  }

const fetchmoredata=async ()=>{
  // console.log(page);
  let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f0d6743ee9894d40bde34627ec0fd8f2&page=${page+1}&pagesize=${props.pagesize}`;
  setpage(page+1);
  setloading(true);
  let data = await fetch(url);
  let parsedata = await data.json();
  setarticles(articles.concat(parsedata.articles));
    settotalnews(parsedata.totalResults)
    setloading(false);
}

useEffect(() => {
  document.title=`${props.category}-News Monkey`;

  handleclick();
  // eslint-disable-next-line
}, [])



//  const componentDidMount=async()=> {
    // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f0d6743ee9894d40bde34627ec0fd8f2&pagesize=${props.pagesize}`;
  //   this.setState({loading:true});
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   this.setState({articles:parsedata.articles,loading:false,totalnews=parsedata.totalResults});
    // console.log(parsedata);
    
    
  // }
  



//  const handleprevious=async ()=>{
//   let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f0d6743ee9894d40bde34627ec0fd8f2&page=${page-1}&pagesize=${props.pagesize}`;
//   this.setState({loading:true});

// let data = await fetch(url);
// let parsedata = await data.json();
// this.setState({articles:parsedata.articles});
//     this.setState({page:page-1,loading:false});
// setpage(page-1)
// handleclick();
//   }

//  const handlenext=async()=>{
//     let currentpage=page+1;
//   let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f0d6743ee9894d40bde34627ec0fd8f2&page=${currentpage}&pagesize=${props.pagesize}`;
//   this.setState({loading:true})
// let data = await fetch(url);
// let parsedata = await data.json();
// this.setState({articles:parsedata.articles});
//   this.setState({page:page+1,loading:false});
// setpage(page+1)
// handleclick();

//  }


 
    return (
      <>
        <div className="container my-2 text">
          <div className="text-center">
          <h2 style={{margin:"40px 0px" ,marginTop:"90px"}} >News-Monkey Top {props.category} headlines</h2>
        {loading && <Spinner/>}
        
          </div>
          <InfiniteScroll
  dataLength={articles.length} //This is important field to render the next data
  next={fetchmoredata}
  hasMore={articles.length!==totalnews}
  loader={<Spinner/>}
 >
          
          <div className="container">
          <div className="row my-3">
            { articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
          
          </InfiniteScroll>
        </div>




        {/* <div className="d-flex justify-content-between container" style={{marginBottom:"20px"}}>
      <button type="button" disabled={page<=1} className="btn btn-primary" onClick={this.handleprevious}> &larr; previous </button>
      <button type="button" disabled={page>=Math.ceil(props.totalnews/props.pagesize)} className="btn btn-primary" onClick={this.handlenext}>Next &rarr;</button>
      </div> */}
      </>


    );
     
}
News.defaultProps={country:"in",pagesize:8,category:"sports"};
News.propTypes={country:PropTypes.string,pagesize:PropTypes.number,category:PropTypes.string};
export default News
 