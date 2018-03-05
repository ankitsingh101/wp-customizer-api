
class Sidetabs extends React.Component {
  render() {
    return(
      <div>
      <a href="#" class="list-group-item active text-center">
         <h4 class="fa fa-globe" aria-hidden="true"></h4><br>Global
      </a>
      </div>
    );
  }
}
ReactDOM.render(<Sidetabs />, document.getElementsByClassName('list-group')[0]);
