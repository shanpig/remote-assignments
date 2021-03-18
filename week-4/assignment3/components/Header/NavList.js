class NavList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ul className={`menu ${this.props.isCollapsed?"":"active"}`}>
        <button onClick={this.props.toggleCollapsed}>X</button>
        <li className="nav-items">Item 1</li>
        <li className="nav-items">Item 2</li>
        <li className="nav-items">Item 3</li>
        <li className="nav-items">Item 4</li>
      </ul>
    )
  }
}

NavList.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggleCollapsed: PropTypes.func.isRequired,
}