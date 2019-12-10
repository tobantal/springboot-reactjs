function foo(a) {  // Noncompliant
  let b = 12;
  if (a) {
    return b;
  }
  return b;
} // only for test

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch(this.props['data-url'])
      .then((response)=>response.json())
      .then((users)=>this.setState({users: users}))
  }
  render() {
    return <div className="container">
      <h1>List of Users</h1>
      <table className="table-striped table-condensed table table-bordered table-hover">
        <thead>
          <tr>
            <td>ID</td>
            <td>UUID</td>
            <td>NAME</td>
          </tr>
        </thead>
        <tbody>{this.state.users.map((user)=>
          <tr key={user.id}>
            <td> {user.id}</td>
            <td> {user.uuid}</td>
            <td>{user.name}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  }
}
