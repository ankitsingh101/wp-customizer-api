
class Sidetabs extends React.Component {
  render() {
    return(
      <a href="#" className="list-group-item active text-center">
       <div><h4 className="fa {this.state.class}" aria-hidden="true"></h4><br/>{this.state.title}</div>
      </a>
    );
  }
}
ReactDOM.render(<Sidetabs title="Global" class="fa-global"/>, document.getElementsByClassName('list-group')[0]);
