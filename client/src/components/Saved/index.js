import React, { Component } from 'react';
import axios from "axios";
import Header from "../Header";
import SaveDisplay from '../SaveDisplay';

class Saved extends Component {
    constructor(props){
        super(props);

        this.state = {
            saved: null
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
       this.loadSaved(); 
    }
    loadSaved = () => {
        console.log("LOADING")
        axios({
            method:'get',
            url:'/API/saved',
            responseType:'json'
          }).then((response)=>{
            this.setState({
               saved: response.data,
               loading: false
           }, function(){
               console.log(this.state.saved)
           })
        }) 
    }
    handleDelete(e){
        e.preventDefault();

        console.log("CLICKED DELETE " + e.target.id)
        axios.delete("/saved/", {
            data:{
                id: e.target.id
            }
        }).then((res) => {
            console.log(res)
            this.loadSaved()})
    }

    render() {
        var saved;
        if(this.state.saved){
            saved = <SaveDisplay 
            handleDelete={this.handleDelete}
            books={this.state.saved}
        />
        } else {
            saved = <h1 className="col-10">No saved books...</h1>
        }
        
        return (
            <div>
                <Header></Header>
                {
                    saved
                }
            </div>
        );
    }

}

export default Saved;