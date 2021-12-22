import React from "react";

const Newsitem =(props)=> {
   
  
    let { title, description, imageurl,newsurl,author,date,source} = props;

    return (
      <div>
        <div className="card my-2" >
        <div className="container" style={{display:"flex",position:"absolute",justifyContent:"flex-end",right:"-23px"}}>
        <span className=" badge rounded-pill bg-danger" >
    {source}</span></div>
          <img src={imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} updated at {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default Newsitem