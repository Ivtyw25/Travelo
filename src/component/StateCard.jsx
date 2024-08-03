import './component.css';
import { data } from '../data/state-mission';

export default function StateCard(props) {
  const { state } = props;
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
    </div>
  );
}
