import { Component } from "react";
import check from "./check.png";
// import greenCheck from "./green-check.png";

export class ToDo extends Component{
    state = {
        userInput: "",
        list: [],
        // img: check
    }

    onChangeEvent (e){
        this.setState ({userInput: e})
        console.log(e)
    }
    addItem (input){
        if (input === "") {
                alert ("Please fill the input");
        }
        else {
            let listArray = this.state.list;
            listArray.unshift(input)
            this.setState({list : listArray, userInput:''})
        }
    }
    deleteItem(){
        let listArray = this.state.list;
        listArray = [];
        this.setState ({list : listArray})
    }

    onFormSubmt(e){
        e.preventDefault();
    }
    crossedWord(e){
        const li = e.target;
        li.classList.toggle("crossed");
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmt}>
                <div className="container">
                <input type="text"
                placeholder="type your plans ..."
                onChange = { (e) => {this.onChangeEvent(e.target.value)}}
                value = {this.state.userInput} />
                    <button onClick = { ()=> this.addItem ( this.state.userInput)} className="btn add">ADD</button>
                </div>
                <div>
                    <ul> {this.state.list.map((item, index) => (
                        <li onClick = {this.crossedWord} key = {index} > 
                            <img src ={check} alt="Check" width="30px"/>
                            {item}</li> 
                    ))}
                        
                    </ul>
                </div>
                <div className="container">
                    <button onClick = { ()=> this.deleteItem (this.state.userInput)} className="btn delete">CLEAR ALL</button>
                </div>
                </form>
            </div>
        )
    }
}