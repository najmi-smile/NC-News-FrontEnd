import React from 'react';
import { Link } from 'react-router-dom';
import GetUsers from '../../httpRequests/FetchData';


class Users extends React.Component {
  state = {
    users : []
  }
  componentDidMount(){
    GetUsers('users')
      .then(res=>{
        this.setState({
          users : res.users
        })
      })
      .catch(console.log);

  }
  render() {
    const {users} = this.state;
    return (
      <div>
        <h4>Users <Link to="#"></Link></h4>
        <div className="row">
          <ul className="list-unstyled">
            {users && users.map(user => {
              return <div className="col-sm-6" key={user._id}><li ><Link to={user._id}>{user.name}</Link></li></div>
            })}
          </ul>                
        </div>
      </div>
    )
  }
}

export default Users;