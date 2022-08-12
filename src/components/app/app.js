import './app.css';
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import PersonnelList from "../personnel-list/personnel-list";
import AppForm from "../app-form/app-form";
import {Component} from "react";
import nextId from "react-id-generator";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true,  id: nextId()},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false,  id: nextId()},
                {name: 'Carl w.', salary: 5000, increase: false, rise: false,  id: nextId()}
            ]
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

    // onToggleRise = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(obj => obj.id === id);
    //         const old = data[index];
    //         const newItem = {...old, rise: !old.rise};
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //
    //         return {
    //             data: newArr
    //         }
    //     });
    // }


    render() {
        const totalPersonnel = this.state.data.length;
        const personnelGotBonus = this.state.data.filter(obj => obj.increase).length;

        return (
            <div className="app">
                <AppInfo
                    totalPersonnel={totalPersonnel}
                    personnelGotBonus={personnelGotBonus}
                />
                <div className="search-panel">
                    <AppSearch/>
                    <AppFilter/>
                </div>
                <PersonnelList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <AppForm
                    onCreate={this.createItem}
                />
            </div>
        );
    }
}

export default App;