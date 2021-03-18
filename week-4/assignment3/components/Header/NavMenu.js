class NavMenu extends React.Component {
  state = {
    isCollapsed: true,
  }

  toggleCollapsed = ()=>{
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }
  render() {
    return (
      <div className="main-nav">
        <BurgerButton toggleCollapsed={this.toggleCollapsed} />
        <NavList
          isCollapsed={this.state.isCollapsed}
          toggleCollapsed={this.toggleCollapsed}
        />
      </div>
    )
  }
}