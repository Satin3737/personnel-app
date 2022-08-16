import nextId from "react-id-generator";

const myPersonnel = [
    {name: 'John C.', salary: 800, increase: false, rise: true,  id: nextId()},
    {name: 'Alex M.', salary: 3000, increase: true, rise: false,  id: nextId()},
    {name: 'Sasha R.', salary: 1200, increase: false, rise: false,  id: nextId()},
    {name: 'Carl w.', salary: 5000, increase: false, rise: false,  id: nextId()}
]


const filters = [
    {name: 'all', label: 'All employees'},
    {name: 'rise', label: 'For promotion'},
    {name: 'salary', label: 'Get more than $1,000'}
]

export {myPersonnel, filters};