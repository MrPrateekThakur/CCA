export default function Header() {
    return <>
        <div className="container-fluid pt-4 pb-4" id="header">
            <div className="row text-center">
                <div className="col-2">
                    <i class="fa-solid fa-bars fa-2xl" style={{ color: '#ffffff' }}></i>
                </div>
                <div className="col-6 offset-1">
                    <input type="text" placeholder="Search" className="form-control rounded-pill" />
                </div>
                <div className="col-2 offset-1">
                    <i class="fa-solid fa-user fa-2xl" style={{ color: '#ffffff' }}></i>
                </div>
            </div>
        </div>
    </>
}