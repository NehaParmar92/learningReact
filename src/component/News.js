import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './component.css';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 20,
        categorey: 'general'
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize: PropTypes.number,
        categorey: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
async updateData(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categorey}&apiKey=d859ef457c554d7d84c47c607a4fd54d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults });
}
    async componentDidMount() {
      this.updateData();
    }
    handlePreviousClick = async () => {
        this.updateData();

        this.setState({
            page: this.state.page - 1});
    }
    handleNextClick = async () => {
        this.updateData();
            this.setState({
                page: this.state.page + 1});
        }
    
    render() {
        return (
            <main className="main-area">
                <section className="cards">
                    {this.state.loading && <Spinner />}
                    <article>News
                    </article>
                    <div className="card">
                        {!this.state.loading && this.state.articles.map((element) => {
                            console.log("element", element);
                            return (
                                <div className='card-content' key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title : ''}
                                        description={element.description ? element.description : ''}
                                        imageUrl={element.urlToImage ? element.urlToImage : ''}
                                        newsUrl={element.url ? element.url : ''}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className='buttonContainer'>
                    <button className="button button1" type='button' disabled={this.state.page <= 1} onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button className="button button2" type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
                </section>
            </main>
        );
    }
}

export default News;
