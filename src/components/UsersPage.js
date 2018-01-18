import React from 'react';
import GetUsers from '../httpRequests/GetUsers';

class UsersPage extends React.Component {
  state = {
    users : []
  }
  componentDidMount(){
    GetUsers()
      .then(res=>{
        this.setState({
          users : res.users
        })
      })
      .catch(console.log);

  }
  render () {
    const userNode = this.state.users.map(user => {
      return (
        <ul>
          <li>{ user.username }</li>
          <li>{ user.name }</li>
          <li>{ user.avatar_url }</li>
        </ul>
      )
    })
    return (
      <div>
        {userNode}
      </div>
    )
  }

}

export default UsersPage;