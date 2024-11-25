//task 1
import Rect, {useState, useEffect} from 'app.jsx';

function tourlist () {
    const [tours, setTours]=useState([]);
    useEffect () => {
        fetch ('https://course-api.com/react-tours-project')
        .then (response => response.json())
        .then (data => setTour(data));

    } [];
    return (
        <div>
            <h2> Tours</h2>
            <ul>
                {sales.map(tour =>(
                    <li key={setTour.id}>
                        {tourlist.name}: ${tourlist.price}
                    </li>
                ))}
            </ul>
        </div>
    );
    
}

export default TourDashboard;


