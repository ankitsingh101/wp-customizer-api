
class Sidetabs extends React.Component {
  render() {
    return(
      <a href="#" className="list-group-item active text-center">
       <div><h4 className={this.props.class} aria-hidden="true"></h4><br/>{this.props.title}</div>
      </a>
    );
  }
}
ReactDOM.render(<Sidetabs title="Global" class="global"/>, document.getElementsByClassName('list-group')[0]);
