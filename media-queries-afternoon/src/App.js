import React from 'react';
import './App.css';
import './Reset.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: 'toggle-menu'
    }
  }

  handleClick = () => {
    if(this.state.toggle === 'toggle-open') {
      this.setState({toggle: 'toggle-closed'});
    } else {
      this.setState({toggle: 'toggle-open'});
    }
  }

  render() {
    return (
      <nav>
        <ul>
          <div>
            <li>Start Bootstrap</li>
          </div>
          <li className='menu-text'>Services</li>
          <li className='menu-text'>Portfolio</li>
          <li className='menu-text'>About</li>
          <li className='menu-text'>Team</li>
          <li className='menu-text'>Contact</li>
         <li>
            <img 
            onClick={this.handleClick}
            src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" 
            alt="ham_menu" />
          </li>
          <div className={this.state.toggle}>
            <ul className='drop-down-text'>
           <li>Services</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
           </ul>
          
          </div>
        </ul>
      </nav>
    )
  }
};


