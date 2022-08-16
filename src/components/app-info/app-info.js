import './app-info.css';

const AppInfo = (props) => {
    const {totalPersonnel, personnelGotBonus} = props;

    return (
        <div className="app-info">
            <h1>Personnel company info</h1>
            <h2>Total number of personnel: {totalPersonnel}</h2>
            <h2>Get a bonus: {personnelGotBonus}</h2>
        </div>
    );
}

export default AppInfo;