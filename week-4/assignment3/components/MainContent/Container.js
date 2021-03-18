class Container extends React.Component {
  constructor (props){
    super(props);
  }
  render() {
    const ClassForHidden = this.props.isHidden?"hidden":"";
    const IdForHidden = this.props.isHidden?"hidden-contents":"";

    return (
      <div className={`container ${ClassForHidden}`} id={IdForHidden}>
        <div className="content-box">Content Box 1</div>
        <div className="content-box">Content Box 2</div>
        <div className="content-box">Content Box 3</div>
        <div className="content-box">Content Box 4</div>
      </div>
    )
  }
};

Container.propTypes = {
  isHidden: PropTypes.bool,
}
Container.defaultProps = {
  isHidden: false
}