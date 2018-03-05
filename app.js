
class Sidetabs extends React.Component {
  render() {
    return(
      <a href="#" className="list-group-item text-center">
       <div><h4 className={"fa fa-" + this.props.class} aria-hidden="true"></h4><br/>{this.props.title}</div>
      </a>
    );
  }
}
let modals = (
  <div className="list-group">
    <Sidetabs title="Globel" class="globe"/>
    <Sidetabs title="Sections" class="archive"/>
  </div>
);
ReactDOM.render(modals, document.getElementsByClassName('bhoechie-tab-menu')[0]);
