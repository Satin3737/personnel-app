import './personnel-list.css';
import PersonnelListItem from "../personnel-list-item/personnel-list-item";

function PersonnelList({data}) {

    const listItems = data.map(item => {
        return (
            // <PersonnelListItem name={item.name} salary={item.salary} />
            <PersonnelListItem {...item} />
        );
    });

    return (
        <ul className="app-list list-group">
            {listItems}
        </ul>
    );
}

export default PersonnelList;