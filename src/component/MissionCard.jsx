import './component.css'
export default function MissionCard(props){
    const { taskName, description, location, imageUrl,status } = props.data;
    const stats = status ? "Done" : "To be explored";
    return (
        <div className="mission-card">
            <img src={imageUrl} alt={taskName} className="mission-image" />
            <div className="mission-content">
                <h1 className="task-name">{taskName}</h1>
                <p className="desc">{description}</p>
                <p className="location">Location: {location}</p>
                <p className="stats">{stats}</p>
            </div>
        </div>
    );
}