import React from "react";
import './Wiki.scss';

export class Wiki extends React.Component{

    constructor(props){
        super(props);

          this.state={
              pages: null,
              style: 'resultsBox',
              input: 'wikiSearch',
              randomButton: 'randomButton',
              loaderButton: 'hiddenButton',
              count: 5,
              title: ''
          };
          console.log(this.state.pages);
    }

    getWiki(covfefe){
        const myInit = {
            method: 'GET'
        };
        let title = covfefe;
        let limit = this.state.count;
        let URL = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&generator=allpages&gaplimit=${limit}&gapfrom=${title}&prop=linkslcategories&titles=${title}&indexpageids=&formatversion=2&format=json`;

        fetch(URL, myInit).then((response) => {return response.json()})
        .then((response) => {this.setState((previousState, currentProps) => {return {
          pages:response.query.pages
        }})});
        console.log(this.state.pages);
    }

        loader(){
      this.setState({
          count: this.state.count +=1
      });
      this.getWiki(this.state.title);
      console.log(this.state.count);
    }


    randomWiki(){
        window.open(`https://en.wikipedia.org/wiki/Special:Random`);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getWiki(event.target.search.value);
        this.setState({
            style: 'resultsBox',
            input: 'wikiSearch2',
            randomButton: 'randomButton2',
            loaderButton: 'hiddenButton2',
            title: event.target.search.value
        });
    }

    render(){
        const pages = this.state.pages;
        const listItems = this.state.pages === null ? console.log('you got problems')  : pages.map((page) =>
            <div key={page.pageid} className={this.state.style}><a href= {`https://en.wikipedia.org/wiki/${page.title}`}><h3>{page.title}</h3></a><br /></div>
      );
        return(
          <div className='wikiContainer'>
              <div>
                      <form onSubmit={this.handleSubmit.bind(this)}>
                          <input
                              type = "text"
                              name = "search"
                              placeholder = "search a Wikipedia entry here..."
                              className={this.state.input}
                          />
                      </form>
                  <div>
                  <button className={this.state.randomButton} onClick={this.randomWiki.bind(this)}>Load a random entry </button>
                  <button className={this.state.loaderButton} onClick={this.loader.bind(this)}>load more results</button>
                  </div>
                  <div className="resultsContainer">
                      <div>
                          {listItems}
                      </div>
                  </div>
              </div>
        </div>
        );
    }
}
