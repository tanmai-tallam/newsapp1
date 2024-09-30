import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  // to obtain the props from other file(app.js)we have to write some code:
  defaultprops={
    // we will be storing the props that we r obtaining
    country:'in',
    //pageSize:8,
    category:'general',
  };

  PropTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  constructor(){
    super();
    // this.state is js object
    this.state={
      articles:[],
      loading:false,
      page:1,
    };
  }
  
  // componentDidMount : it is life cycle method in react. in react, class components that is invoked immediately after a component is inserted into the Dom that is document object model and it is commonly used for task such as fetching data from a server or setting up subscriptions or initialising some third party applications or libraries.componentDidMount will excecute after all the methods inside this render will excecute

  async componentDidMount(){
    console.log("inside component did mount");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=02a413758b8e455fad8fdd91844b35a7&page=1&pageSize=${this.props.pageSize}`;
    // if this api is loading again, we have to set loading to true
    this.setState({loading:true});
    let data=await fetch(url);
    let parseddata= await data.json();
    //converting data to json
    // keeping and storing entire json data, we can obtain by fetching from api 
    // and awaiting is waiting till entire thing(async function) is fetched
    console.log(parseddata);
    // async await basically does is it will return a promise ok using that promise you can make changes and also you can display the data using the promise that has been returned ok
    this.setState({
      articles:parseddata.articles,
      totalResults:parseddata.totalResults,
      // again wen this componentDidMount is executed we should set loading it to false. initially it is false
      loading:false,
    });
  }


  handlepreviousclick=async()=>{
      console.log("prev");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=02a413758b8e455fad8fdd91844b35a7&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parseddata= await data.json();
      console.log(parseddata);
      
      this.setState({
        page:this.state.page-1,
        articles:parseddata.articles,
        loading:false,
      })
  }

  handlenextclick=async()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      console.log("next");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=02a413758b8e455fad8fdd91844b35a7&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      // while the data is being fetched or when this api is being executed we can set it to true
      let data=await fetch(url);
      let parseddata= await data.json();
      //after all the loading is over, we dont want it to load again and again, so once the execution is complete we set it to false
      this.setState({loading:false});
      this.setState({
        page:this.state.page+1,
        articles:parseddata.articles,
      });
    }
  };

  render() {
    console.log("inside render");
    return (
      
      <div className="container my-4">
        <h1 className={"text-center"} style={{textAlign:"center"}}>NewsApp-Top HeadLines</h1>
        {this.state.loading && <Spinner/>}

        <div className="row my-4">
        {!this.state.loading && this.state.articles.map((element)=>{
          return (<div className="col-md-4 my-4" key={element.url}>
            {/* meaning of above line,for the device of medium width,its 3 columns*/}

            <Newsitem 
              title={element.title?element.title.slice(0,40):""}
              description={element.description?element.description.slice(0,80):""}
              imageurl={element.urlToImage}
              newsurl={element.url}
            />
          </div>
          );
        })}
        </div>
        {/* using one div , we can map through all the elements/objects present and display it*/}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-info" onClick={this.handlepreviousclick}>
            &larr; Previous
          </button>

          {/* if-else statement can also be written instead of disabled */}
          <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" class="btn btn-info" onClick={this.handlenextclick}>
            Next &rarr;
          </button>
        </div>
        
      </div>
    )
  }
}
export default News;

