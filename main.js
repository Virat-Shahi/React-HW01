function App(){

return(
    <div className="photo">
            <img src="https://i.pinimg.com/564x/f6/b0/f0/f6b0f0a6dff7feb91f45a1e8618055e8.jpg"></img>
    </div>
)

}

function Title(){

    return(
        <div className="user">
            <h3 className="name">Lewis Hamilton</h3>
            <p className="email">lewis.hamilton@goatofthecentury.com</p>
        </div>
    )
    
    }

function Followers(){

    return(
        <div className="sec3">
            <div className="posts">
                <h3 className="a">25</h3>
                <p className="p">Posts</p>
            </div>
            <div className="following">
                <h3 className="a">350</h3>
                <p className="p">Following</p>
            </div>
            <div  className="fans">
                <h3 className="a">629m</h3>
                <p className="p">Followers</p>
            </div>
        </div>

    )
}


function Cards() {
    return(
<div className="body">
    <Title />
    <App />
    <Followers />

</div>

)
}

ReactDOM.createRoot(document.querySelector('#root')).render(<Cards />);
