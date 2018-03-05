
class Sidetabs extends React.Component {
  render() {
    return(
      <a href="#" className="list-group-item active text-center">
       <div><h4 className="fa fa-globe" aria-hidden="true"></h4><br>Global</div>
      </a>
    );
  }
}
ReactDOM.render(<Sidetabs />, document.getElementsByClassName('list-group')[0]);
