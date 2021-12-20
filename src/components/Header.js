import '../styles/Header.css';

function Header (props){
    return (
        <div className="Header">

            <div className="Logo">
                <img src="https://cdn-icons-png.flaticon.com/512/261/261778.png"></img>
            </div>

            Spend Money

            <div className="Bars">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    )
}

export default Header;