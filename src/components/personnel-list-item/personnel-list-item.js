import './personnel-list-item.css';

const PersonnelListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise, onSalaryChange} = props;

    let increaseClass = increase ? 'increase' : '';
    let likeClass = rise ? 'like' : '';

    return (
        <li className={`list-group-item d-flex justify-content-between ${increaseClass} ${likeClass}`}>
            <span
                className="list-group-item-label"
                data-toggle="rise"
                onClick={onToggleProp}
            >
                {name}
            </span>
            <input
                type="text"
                className="list-group-item-input"
                value={salary}
                onChange={onSalaryChange}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type="button"
                    className="btn-cookie btn-sm"
                    data-toggle="increase"
                    onClick={onToggleProp}
                >
                    <i className="fas fa-cookie"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default PersonnelListItem;