
class Sidetabs extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>
          {this.props.bio}
        </p>
      </div>
    );
  }
}
//ReactDOM.render(<Sidetabs />, document.getElementsByClassName('list-group')[0]);
