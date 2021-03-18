class Banner extends React.Component {
  handleClick = (e)=>{
    let textBox = e.currentTarget.querySelector("h2");
    textBox.textContent = "Have a Good Time!"
  }
  
  render() {
    return (
      <div
        className="banner"
        onClick={this.handleClick}
        >
        <h2>Welcome Message</h2>
      </div>
    )
  }
};