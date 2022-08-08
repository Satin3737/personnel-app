import './app-form.css';

function AppForm() {
    return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Как его зовут?" />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="З/П в $?" />
                <button type="submit" className="btn btn-outline-light">Add employee</button>
            </form>
        </div>
    );
}

export default AppForm;