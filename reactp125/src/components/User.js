import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class User extends Component {
     constructor(props){
      super(props)

      this.state={
          isOnline:false,

      }
     }

  


  render() {

      const{name,surname,age}=this.props;
      let word=this.state.isOnline?"online":"offline";

    return (
      <div className="container">
       <div className='row'>
           <div className='col-6'>
               <div className='card mt-2'>
                   <div className='card-title'>{name}</div>
                   <div className='card-body'>
                       {word}
                       <p>{surname}--{age}</p>
                       <button className='btn btn-outline-secondary'> delete</button>
                   </div>
               </div>
           </div>
       </div>
      </div>
    )
  }
}
User.propTypes ={
    name:PropTypes.string.isRequired,
    surname:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}

User.defaultProps={
    age:30
}
export default User