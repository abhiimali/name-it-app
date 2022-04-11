import React, { Component }  from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css'


const name = require('@rstacruz/startup-name-generator') ;


class App extends React.Component {
    
    state = {
        HeaderText : 'name it ' ,
        HeaderExpanded : true ,
        SuggestedNames : [] 
    }

    handleInputChange = (inputText) =>{
       
        //console.log("Inout :"+inputText);
        this.setState({ HeaderExpanded : !inputText ,  
                        SuggestedNames : name(inputText), 
        })
        
    }
    render() {

        // console.log(name('priya')); 
        return (
            <>
            
            <Header HeaderExpanded={this.state.HeaderExpanded} 
                     headTitle={this.state.HeaderText} />

            <SearchBox onInputChange={this.handleInputChange} />
            <ResultsContainer SuggestedNames={this.state.SuggestedNames}/>

            
            </>

        )
    }
}

export default App ;