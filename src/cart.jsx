import logo from './logo.svg';
import './App.css';
import React from 'react';
import bed from './images/svg/bed-image.svg';
import bath from './images/svg/bath-image.svg';
import garage from './images/svg/car-image.svg';
import area from './images/svg/ruler-image.svg';
import heart from './images/svg/heart-image.svg';

class Cart extends React.Component { 
  constructor(props){
	super(props) 
	this.state = {
		price:7500,
		amount:1
	
	}
	
  }
  

  
  render(){
	
	const plus = ()=>{
		if(this.state.amount<10){
			this.setState({amount:++this.state.amount})
			this.setState({price:this.state.price+7500})
		}else {}
	
	} 
	const minus = () => {
         if (this.state.amount > 1) {
			this.setState({amount: this.state.amount - 1})
			this.setState({price: this.state.price - 7500})
		 }
	}
	
    

    return(
	  <div className="card">
        <div className="upperCard">
				<img src={this.props.home} alt="img" />
				<div className="upperCard-buttons">
						<button className="button-1">Featured</button>
						<button className="button-2">For Sale</button>
				</div>
	    </div>
		<div className="card-info">
					<div className="card-text">
						<p className="card-title">New Apartment Nice Wiew</p>
						<p className="card-subtitle">Quincy St, Brooklyn, NY, USA</p>
						<div className="card-icons">
							<div>
								<img src={bed} alt="img" />
								<p className="card-subtitle icon-info">4 Beds</p>
							</div>

							<div>
								<img src={bath} alt="img" />
								<p className="card-subtitle icon-info">5 Baths</p>
							</div>
							<div>
								<img src={garage} alt="img" />
								<p className="card-subtitle icon-info">1 garage</p>
							</div>
							<div>
								<img src={area} alt="img" />
								<p className="card-subtitle icon-info ">1200 Sq Ft</p>
							</div>
						</div>
					</div>
	    </div>
		<div className="card-other">
					<div>
						<p className="card-title">${this.state.price}</p>
						<button className="button-1" onClick={plus}>
							+
						</button>
						<p>{this.state.amount}</p>
						<button className="button-2" onClick={minus}>
							-
						</button>
					</div>
					<img src={heart} alt="img" />
				</div>

	  </div>
	 
	 
	 
    )
  }
}

export default Cart;
