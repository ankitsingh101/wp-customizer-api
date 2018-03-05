
class Sidetabs extends React.Component {
  render() {
    return(
      <a href="#" className="list-group-item active text-center">
         <h4 className="fa fa-globe" aria-hidden="true">Global</h4>
      </a>
    );
  }
}
ReactDOM.render(<Sidetabs />, document.getElementsByClassName('list-group')[0]);
