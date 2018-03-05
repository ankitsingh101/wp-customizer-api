
class Sidetabs extends React.Component {
  render() {
    return(
      <a href="#" className="list-group-item active text-center">
       <div><h4 className={"fa fa-" + this.props.class} aria-hidden="true"></h4><br/>{this.props.title}</div>
      </a>
    );
  }
}
let modals = (
  <div>
    <Sidetabs title="Globel" class="globe"/>
    <Sidetabs title="Sections" class="archive"/>
  </div>
);
ReactDOM.render(modals, document.getElementsByClassName('list-group')[0]);
