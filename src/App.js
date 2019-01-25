import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button,FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

import './App.css'
import image from './to-do-list.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList'


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    }
  }

  onChange = (event) => {
	this.setState(
		{ 
			term: event.target.value 
		}
	)
  }

  addItem = (event) => {	
    event.preventDefault();
	if(this.state.term !==""){
		this.setState(
			{
			  term: '',
			  items: [...this.state.items, this.state.term]
			}
		)
	}
  }  
  removeItem = (index, event) =>{
	const newItems = Object.assign([], this.state.items); 
	newItems.splice(index, 1);
	this.setState({items:newItems});
  }
  
  render() {
    return (
      <Container>
		<Row>
		  <Col className="text-center">
			<img className ="logo" src = {image} alt ="To Do List"/>
		  </Col>
		</Row>
		<Row>
          <Col>
			<form onSubmit={this.addItem}>
			  <FormGroup className="App">
		        <Label for="TodoList">To do List</Label>
		        <InputGroup>
				  <Input                 
 					value={this.state.term} 
					onChange={this.onChange}
				  />				  		
					<InputGroupAddon addonType="prepend"><Button color="primary" onClick={this.addItem}>Add to-do</Button></InputGroupAddon>
				  </InputGroup>

				  <TodoList 
					items = {this.state.items} 
					removeItem ={this.removeItem}
				  />
		
		      </FormGroup>
      		</form>
		  </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
