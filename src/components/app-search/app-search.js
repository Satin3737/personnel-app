import './app-search.css';
import {Component} from "react";

class AppSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onValueChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render () {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="find employee"
                value={this.state.term}
                onChange={this.onValueChange}
            />
        )
    }
}

export default AppSearch;