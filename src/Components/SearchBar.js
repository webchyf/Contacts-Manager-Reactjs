import React from 'react';
import '../App.css';


class SearchBar extends React.Component{
	constructor(){
		super()
		this.state={ inputText: 'Search by Name' };
		
	}


	handleChangeOnSearch=(event)=>{
		this.setState({
			inputText : event.target.value,
			
		});

	}

	handleSubmitOnSearch=(event)=>{

        this.props.searchContact(this.state.inputText);
		
	}





  render(){

  return(
	  <form className="searchField" onSubmit={this.handleSubmitOnSearch}>
          <i className="fas fa-search"></i>
          <input type="text" value={this.state.inputText} onChange={this.handleChangeOnSearch} ></input>
      </form>
      )
  	
}
}  


export default SearchBar;
