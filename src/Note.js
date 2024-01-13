import { Component } from 'react';
import { render } from 'react-dom';
import picture from './note.png'


export default class Note extends Component {
   
    state = {
        userInput: "",
        noteList: []
    }

    onChangeEvent(e) {
        
        this.setState({userInput:e})
       
        
    }

    addItem(input) {
        if(input === '') {
            alert('Please enter an item')
        }
        else{
        let listArray = this.state.noteList;
        listArray.push(input);
        this.setState({noteList: listArray, userInput: ""})
        }
        
    }
    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed')
    }
    deleteItem() {
        let listArray = this.state.noteList;
        listArray = [];
        this.setState({noteList: listArray})
    }
    onFormSibmit(e){
        e.preventDefault()
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSibmit}> 
                    <div className='Container'>
                        <input type='text' placeholder='Type your plans' 
                        onChange = {(e) => {this.onChangeEvent(e.target.value)}} 
                        value = {this.state.userInput} />
                    </div>
                    <div className='Container'>
                        <button className='Add' onClick={() => this.addItem(this.state.userInput)}>
                            ADD
                        </button>
                        </div>
                        <ul>
                            {this.state.noteList.map((item,index) => (
                                <li key = {index} onClick={this.crossedWord}> 
                                <img src={picture} width='40px' alt='pictureNotes'/>
                                {item}</li>
                            ))}
                        </ul>
                    
                    <div className='Container'>
                        <button className='Delete' onClick={() => this.deleteItem()}>DELETE</button>
                    </div>
                </form>
            </div>
        )
    }
}

