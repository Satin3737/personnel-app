import './app.css';
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import PersonnelList from "../personnel-list/personnel-list";
import AppForm from "../app-form/app-form";
import {Component} from "react";
import nextId from "react-id-generator";
import {myPersonnel} from "../../appData/data";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: myPersonnel,
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(obj => obj.id !== id)
            }
        });
    }

    createItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(obj => {
                if (obj.id === id) {
                    return {...obj, [prop]: !obj[prop]};
                }
                return obj;
            })
        }));
    }

    searchPersonnel = (data, term) => {
        if (term.length === 0) {
            return data;
        }

        return data.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    FilterUpdate = (data, filter) => {
        switch (filter) {
            case 'rise':
                return data.filter(item => item.rise);
            case 'salary':
                return data.filter(item => item[filter] > 1000);
            case 'all':
                return data;
            default:
                return data;
        }

    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFiltersChange = (filter) => {
        this.setState({filter});
    }

    onSalaryChange = (id, salary) => {
        this.setState(({data}) => ({
            data: data.map(obj => {
                if (obj.id === id) {
                    return {...obj, salary: salary};
                }
                return obj;
            })
        }));
    }


    render() {
        const {data, term, filter} = this.state;
        const totalPersonnel = data.length;
        const personnelGotBonus = data.filter(obj => obj.increase).length;
        const searchData = this.searchPersonnel(data, term);
        const visibleData = this.FilterUpdate(searchData, filter);

        return (
            <div className="app">
                <AppInfo
                    totalPersonnel={totalPersonnel}
                    personnelGotBonus={personnelGotBonus}
                />
                <div className="search-panel">
                    <AppSearch
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onFiltersChange={this.onFiltersChange}
                    />
                </div>
                <PersonnelList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSalaryChange={this.onSalaryChange}
                />
                <AppForm
                    onCreate={this.createItem}
                />
            </div>
        );
    }
}

export default App;