import './component.css'
export default function StateCard(props){


    return(
        <div className="containers">
                <h1 className="title"> {props.state} </h1>
                <h2 className="rate"> 3 / 10</h2>
        </div>
    )
}