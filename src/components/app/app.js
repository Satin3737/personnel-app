import './app.css';
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import PersonnelList from "../personnel-list/personnel-list";
import AppForm from "../app-form/app-form";

function App() {

    const data = [
        {name: 'John C.', salary: 800, increase: false},
        {name: 'Alex M.', salary: 3000, increase: true},
        {name: 'Carl w.', salary: 5000, increase: false}
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <AppSearch/>
                <AppFilter/>
            </div>
            <PersonnelList data={data}/>
            <AppForm/>
        </div>
    );
}

export default App;