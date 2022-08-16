import './app-filter.css';
import {filters} from "../../appData/data";

const AppFilter = (props) => {

    const buttons = filters.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFiltersChange(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;