import './component.css';
import './StateCard.css';
import { data } from '../data/state-mission';

export default function StateCard(props) {
  const { state, image } = props;
  let matchCount = 0;
  let stateCount = 0;

  data.forEach(item => { // Changed from map to forEach
    if (item.State === state) {
      if (item.status) {
        matchCount += 1;
      }
      stateCount += 1;
    }
  });

  return (
    <div className="containers">
      <h1 className="title">{state}</h1>
      <h2 className="rate">{matchCount} / {stateCount}</h2>
      {/* Display the image */}
      <img src={image} alt={`${state} image`} class="state-card-image"/>
    </div>
  );
}

