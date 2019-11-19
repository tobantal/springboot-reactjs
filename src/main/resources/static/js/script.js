let dataUrl = '/users/';
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Users, { 'data-url': dataUrl })
), document.getElementById('content'));