// // CLASS BASED COMPONENT


// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";

// export default class News extends Component {
//     static defaltProps = {
//         country: 'in',
//         pageSize: 10,
//         categoty: 'science'
//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     };
//     // articles = [
//     //     {
//     //         "source": {
//     //             "id": "espn-cric-info",
//     //             "name": "ESPN Cric Info"
//     //         },
//     //         "author": null,
//     //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//     //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//     //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//     //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//     //         "publishedAt": "2020-04-27T11:41:47Z",
//     //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     //     },
//     //     {
//     //         "source": {
//     //             "id": "espn-cric-info",
//     //             "name": "ESPN Cric Info"
//     //         },
//     //         "author": null,
//     //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//     //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//     //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//     //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//     //         "publishedAt": "2020-03-30T15:26:05Z",
//     //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     //     }
//     // ]

//     capitalize = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     };
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             isLoading: false,
//             page: 1,
//             totalResults: 0,


//         };
//         document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
//     }

//     async updateNews() {
//         this.props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
//         this.setState({ isLoading: true });
//         let data = await fetch(url);
//         this.props.setProgress(30);
//         let parsedData = await data.json();
//         this.props.setProgress(70);
//         // console.log(JSON.stringify(parsedData));
//         console.log(parsedData);
//         this.setState({
//             articles:
//                 parsedData.articles,
//             totalArticles: parsedData.totalResults,
//             isLoading: false,
            
//         })
//         this.props.setProgress(100);
//     }

//     async componentDidMount() {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=6dc97f3571a94b528c6b63cd0065570a&page=1&pageSize=${this.props.pageSize}`
//         // this.setState({isLoading:true});
//         // let data = await fetch(url);
//         // let parsedData = await data.json();
//         // // console.log(JSON.stringify(parsedData));
//         // console.log(parsedData);
//         // this.setState({articles: 
//         //     parsedData.articles, 
//         //     totalArticles: parsedData.totalResults, 
//         //     isLoading:false
//         // })
//         this.updateNews();
//     }

//     handleNextClick = async () => {
//         // if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

//         // }
//         // else{
//         //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=6dc97f3571a94b528c6b63cd0065570a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
//         //     this.setState({isLoading:true});
//         //     let data = await fetch(url);
//         //     let parsedData = await data.json();
//         //     // console.log(JSON.stringify(parsedData));
//         //     // console.log(parsedData);


//         //     this.setState({
//         //         page:this.state.page + 1,
//         //         articles: parsedData.articles,
//         //         isLoading:false
//         //     })

//         // }
//         this.setState({ page: this.state.page + 1 });
//         this.updateNews();
//     };

//     handlePrevClick = async () => {

//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=6dc97f3571a94b528c6b63cd0065570a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
//         // this.setState({isLoading:true})
//         // let data = await fetch(url);
//         // let parsedData = await data.json();
//         // // console.log(JSON.stringify(parsedData));
//         // console.log(parsedData);

//         // this.setState({ 
//         //     page:this.state.page - 1,
//         //     articles: parsedData.articles,
//         //     isLoading:false
//         // })
//         this.setState({ page: this.state.page - 1 });
//         this.updateNews();

//     };

//     fetchMoreData = async() => {
//         this.setState({ page: this.state.page + 1 });
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         // console.log(JSON.stringify(parsedData));
//         console.log(parsedData);
//         this.setState({
//             articles:this.state.articles.concat(parsedData.articles),
//             totalArticles: parsedData.totalResults,
            
            
//         })
        
//     };
//     render() {
//         return (
//             <>
//                     <h2 className='text-center' style={{ margin: "30px 0px" }}>NewMonkey - TOP headlines on {this.capitalize(this.props.category)}</h2>
//                     {this.state.isLoading && <Spinner />}

//                     <InfiniteScroll
//                         dataLength={this.state.articles.length}
//                         next={this.fetchMoreData}
//                         hasMore={this.state.articles.length !== this.state.totalResults}
//                         loader={<Spinner/>}
//                     >
//                         <div className='container my-3'>
//                         <div className="container">

//                         <div className="row">

//                             {/* {!this.state.isLoading && this.state.articles.map((element) => {
//                         return (
//                             <div className='col-md-4' key={element.url}>
//                                 <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
//                                 </div>
//                         )
//                     })} */}

//                             {/* {!this.state.isLoading && this.state.articles.map((element) => {
//                         return (
//                             <div className='col-md-4' key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name ? element.source.name : "Unknown"} />
//                             </div>
//                         )
//                     })} */}


//                             {this.state.articles.map((element) => {
//                                 return (
//                                     <div className='col-md-4' key={element.url}>
//                                         {/* <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
//                                         <NewsItem
//                                             title={element.title ? element.title : ""}
//                                             description={element.description ? element.description : ""}
//                                             imageUrl={element.urlToImage}
//                                             newsUrl={element.url}
//                                             author={element.author ? element.author : "Unknown"}
//                                             date={element.publishedAt}
//                                             source={element.source.name ? element.source.name : "Unknown"} />
//                                     </div>
//                                 )
//                             })}


//                         </div>
//                         </div>
//                         </div>
//                     </InfiniteScroll>
//                     {/* <div className='container d-flex justify-content-between'>
//                         <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>&larr; previous </button>
//                         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
//                     </div> */}
                
//             </>
//         )
//     }
// }




// FUNCTION BASED COMPONENT


import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    
    const [articles, setArticles] =useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    

    const updateNews = async(props) => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setIsLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setIsLoading(false);


        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsMonkey`;
        updateNews();

    },[]);


   
    const handleNextClick = async () => {
        setPage(page + 1)
        updateNews();
    };

    const handlePrevClick = async () => {
        setPage(page-1)
        updateNews();

    };

    const fetchMoreData = async() => {
       
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
       
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        
    };
    
        return (
            <>
                    <h2 className='text-center' style={{ margin: "30px 0px",marginTop:"90px" }}>NewMonkey - TOP headlines on {capitalize(props.category)}</h2>
                    {isLoading && <Spinner />}

                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner/>}
                    >
                        <div className='container my-3'>
                        <div className="container">

                        <div className="row">

                            {/* {!isLoading && articles.map((element) => {
                        return (
                            <div className='col-md-4' key={element.url}>
                                <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                                </div>
                        )
                    })} */}

                            {/* {!isLoading && articles.map((element) => {
                        return (
                            <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name ? element.source.name : "Unknown"} />
                            </div>
                        )
                    })} */}


                            {articles.map((element) => {
                                return (
                                    <div className='col-md-4' key={element.url}>
                                        {/* <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                                        <NewsItem
                                            title={element.title ? element.title : ""}
                                            description={element.description ? element.description : ""}
                                            imageUrl={element.urlToImage}
                                            newsUrl={element.url}
                                            author={element.author ? element.author : "Unknown"}
                                            date={element.publishedAt}
                                            source={element.source.name ? element.source.name : "Unknown"} />
                                    </div>
                                )
                            })}


                        </div>
                        </div>
                        </div>
                    </InfiniteScroll>
                    {/* <div className='container d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>&larr; previous </button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
                
            </>
        )
    
}

News.defaltProps = {
    country: 'in',
    pageSize: 10,
    categoty: 'science'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;