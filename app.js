var GroceryList = (props) => (
    <div>
      <h1>M&M's Grocery List:</h1>
      <ul>
        {props.items.map(item =>
          <GroceryListItem something={item} />)}
      </ul>
    </div>
  );

  class GroceryListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        done: false
      };
    }

    onHover() {
      this.setState({done: true});
    }

    offHover() {
      this.setState({done: false});
    }

    render() {
      var style = {
        'font-weight': this.state.done ? 'bold' : 'normal'
      };
      return (<li style={style} onMouseOut={() => this.offHover()} onMouseOver={() => this.onHover()}>{this.props.something}</li>)
    }
  };

ReactDOM.render(<GroceryList items={['Candy', 'Strawberry Milk', 'Cat food', 'Cat toy']}/>, document.getElementById("app"));