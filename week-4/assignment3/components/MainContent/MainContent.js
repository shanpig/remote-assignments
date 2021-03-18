class MainContent extends React.Component {
  state={
    isCollapsed: true,
  }

  toggleHiddenContent = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    return (
      <main>
        <h2>Section Title</h2>
        <Container />
        <button 
          className="cta"
          onClick={this.toggleHiddenContent}
        >
            Call to Action
        </button>
        <Container 
          isHidden={this.state.isCollapsed}
          />
        
      </main>
    )
  }
};