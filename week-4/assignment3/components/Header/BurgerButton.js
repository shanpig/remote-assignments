class BurgerButton extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="nav-burger" onClick={this.props.toggleCollapsed}>
        <div className="nav-burger-meat"></div>
        <div className="nav-burger-meat"></div>
        <div className="nav-burger-meat"></div>
      </div>
    )
  }
}