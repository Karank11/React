import React, { Component } from  'react';
import {Card ,CardImg ,CardImgOverlay ,CardBody ,CardText,CardTitle} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    renderDish(dish){
    if(dish !=null){
    return(
    <div className="row">
    <div className="col-12 col-md-5 mt-1">
    <Card>
    <CardImg with="100%" src={dish.image} alt={dish.name}></CardImg>
    <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
    </CardBody>
    </Card>
    </div>
    <div className="col-12 col-md-5 mt-1">
        {this.renderComments(dish.comments)}
    </div>
    </div>
    )
    }
    else{
        return(
        <div></div>
        )
    }
}

renderComments(comments){
    const com = comments.map((c) => {
        return (
          <div key={c.id}>
           <b><p>{c.comment}</p></b>
           <p>{c.author} {c.date}</p>
          </div>
        );
    });

return(
    <div>
    <h4>comments</h4>
    {com}
    </div>
    )

}

render(){
    return(
       <div className="row">
       {this.renderDish(this.props.dish)}
       </div>
    );
}
}
export default Dishdetail;