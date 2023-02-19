
import { useAuth0} from "@auth0/auth0-react";
import { useQuery } from "../convex/_generated/react";
import {Link} from 'react-router-dom';

const offers = () =>{
    const offers = useQuery("listOffers") || [];
    const { user } = useAuth0();
    console.log(user);
    return(<main>
        {offers.filter( s =>s.auth1 == user.sub).map(s => (
            <div key={s._id.toString()}>
              <div className = "card">
              <div className="card-body">
              Title: {s.title}<br></br>
              Tags: {s.tag}
              <br></br>
              Description: {s.description}<br></br>
              Author: {s.author}
              </div>
          </div>
          <div className = "card">
              <div className="card-body">
              Title: {s.title}<br></br>
              Tags: {s.tag}
              <br></br>
              Description: {s.description}<br></br>
              Author: {s.author}
              </div>
          </div>
            </div>
            
          ))}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
         <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className = "nav-link" to = '/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className = "nav-link" to = '/offers'>Offers</Link>
            </li>
            <li className="nav-item">
              <Link className = "nav-link" to = '/mylistings'>My Listings</Link>
            </li>
          </ul>
         </div>
      </nav>
      </main>)
        
    }
    export default offers;