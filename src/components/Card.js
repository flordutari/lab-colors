import React, { Component } from 'react';

class Card extends Component {
  render(){
    const {
      colorOne,
      colorTwo
    } = this.props;

    const style = { 
      backgroundImage: `linear-gradient(135deg, ${colorOne} 10%, ${colorTwo} 100%)`, 
      height: "160px",
      width: "170px",
      borderRadius: "12px 12px 0px 0px",
      display: "flex",
      flexWrap: "wrap"
    }

    return(
      <div className="card">
        <div className="card-gradient" style={style}>
          <div className="card-description">
            <div className="card-color-from">{colorOne}</div>
            <div className="card-color-to">{colorTwo}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;

