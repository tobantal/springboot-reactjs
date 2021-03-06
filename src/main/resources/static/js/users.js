class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch(this.props['data-url']).then(response => response.json()).then(users => this.setState({ users: users }));
  }
  render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h1",
        null,
        "List of Users"
      ),
      React.createElement(
        "table",
        { className: "table-striped table-condensed table table-bordered table-hover" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              "ID"
            ),
            React.createElement(
              "td",
              null,
              "UUID"
            ),
            React.createElement(
              "td",
              null,
              "NAME"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          this.state.users.map(user => React.createElement(
            "tr",
            { key: user.id },
            React.createElement(
              "td",
              null,
              " ",
              user.id
            ),
            React.createElement(
              "td",
              null,
              " ",
              user.uuid
            ),
            React.createElement(
              "td",
              null,
              user.name
            )
          ))
        )
      )
    );
  }
}