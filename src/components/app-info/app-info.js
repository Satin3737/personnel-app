import './app-info.css';

function AppInfo(props) {
    const {totalPersonnel, personnelGotBonus} = props;

    return (
        <div className="app-info">
            <h1>Personnel company info</h1>
            <h2>Total number of personnel: {personnelGotBonus}</h2>
            <h2>Get a bonus: {totalPersonnel}</h2>
        </div>
    );
}

export default AppInfo;