export default function Admin() {

    const adminMenu = [
        { id: 1, path: "/", label: "Home" }
    ]

    return (
        <>
            <div className="container my-4">
                <div className=" text-center p-2 mb-4 shadow-lg bg-white rounded-5">

                    <h1>Welcome to admin page</h1>
                </div>
                <aside className="col-3 p-0 shadow-lg bg-white rounded-1">
                    <h4 className="text-center fs-4 fw-bold">Admin menu</h4>
                    <ul class="list-group text-start">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </aside>
            </div>
        </>
    )
}