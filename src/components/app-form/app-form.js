import './app-form.css';
import {Component} from "react";

class AppForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const salary = this.state.salary;
        if (name.length !== 0 || salary.length !== 0) {
            this.props.onCreate(name, salary);
        }
        this.setState({
            name: '',
            salary: ''
        });
    }


    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                >
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="His name?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="salary in $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}
                    />
                    <button type="submit" className="btn btn-outline-light">Add employee</button>
                </form>
            </div>
        );
    }
}

export default AppForm;