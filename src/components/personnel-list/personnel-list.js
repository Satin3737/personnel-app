import './personnel-list.css';
import PersonnelListItem from "../personnel-list-item/personnel-list-item";

function PersonnelList({data, onDelete, onToggleProp}) {

    const listItems = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <PersonnelListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        );
    });

    return (
        <ul className="app-list list-group">
            {listItems}
        </ul>
    );
}

export default PersonnelList;