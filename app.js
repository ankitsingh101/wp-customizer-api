
/*class Sidetabs extends React.Component {
  render() {
    return(
      <a href="#" className="list-group-item text-center">
       <div><h4 className={"fa fa-" + this.props.class} aria-hidden="true"></h4><br/>{this.props.title}</div>
      </a>
    );
  }
}*/
let modals = (
  <div className="list-group">
        <a href="#" className="list-group-item text-center">
            <div><h4 className="fa fa-globe" aria-hidden="true"></h4><br/>Global</div>
        </a>
        <a href="#" className="list-group-item text-center">
            <div><h4 className="fa fa-archive" aria-hidden="true"></h4><br/>Sections</div>
        </a>
        <a href="#" className="list-group-item text-center">
            <div><h4 className="fa fa-cogs"></h4><br/>Settings</div>
        </a>
        <a href="#" id="panel-list" className="list-group-item text-center" styles={{float : 'left', paddingRight : '5px'}}>
             <div><h4 className="fa fa-columns"></h4><br/>Panel</div>
        </a>
        <a href="#" id="control-list" className="list-group-item text-center">
            <div><h4 className="fa fa-columns"></h4><br/>Control</div>
        </a>
    </div>
  //<div className="list-group">
    //<Sidetabs title="Globel" class="globe"/>
    //<Sidetabs title="Sections" class="archive"/>
  //</div>
);
ReactDOM.render(modals, document.getElementsByClassName('bhoechie-tab-menu')[0]);
 
