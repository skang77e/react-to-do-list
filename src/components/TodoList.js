import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';



class TodoList extends Component{	
	render(){
		return(
      		<ListGroup flush>
				{this.props.items.map((item,index) => <ListGroupItem color="info" tag="li" key ={index}>{item}<Button onClick ={this.props.removeItem.bind(this, index)} close />
</ListGroupItem>
				)}
			</ListGroup>
		)
	}
}

export default TodoList;
