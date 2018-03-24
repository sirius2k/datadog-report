import React, {Component} from 'react';

class TopNavigationToggle extends Component {
    constuctor() {
        this.setState({
            data: null
        });

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
		console.log('clicked - menu toggle');
        alert("1234");
    }

    componentDidMount() {
        this.setState({
            data: "Hello"
        });
    }

    render() {
        return (
            <div className="nav toggle">
              <a id="menu_toggle" onClick={this.handleClick}><i className="fa fa-bars"></i></a>
            </div>
          );
    }
}

export default TopNavigationToggle;