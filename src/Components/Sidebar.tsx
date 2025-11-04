function SideBar() { 

    return (
        <div className="sidebar col-3 bg-light vh-100 p-3">
            <h2 className="mt-5">Sidebar</h2>
            <ul className="list-group ml-2">
                <li className="list-group-item">Home</li>
                <li className="list-group-item">About</li>
                <li className="list-group-item">Contact</li>
            </ul>
        </div>
    );
}

export default SideBar; 