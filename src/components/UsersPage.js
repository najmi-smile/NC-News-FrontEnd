import React from 'react';
import GetUsers from '../httpRequests/FetchData';

class UsersPage extends React.Component {
  state = {
    users : []
  }
  componentDidMount() {
    const {username} = this.props.match.params;
    let url = '/users';
    if(username) {
      url = `/users/${username}`
    }   

    GetUsers(url)
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
        <ul key={user._id}>
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