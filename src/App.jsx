import React,{useState} from 'react';
import "./App.css";
import NewEnrollmentForm from './newEnrollment';

function App() {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const handleNewEnrollmentClick = () => {
    setShowEnrollmentForm(true);
  };

  const handleCompletedClick = () => {
    setShowEnrollmentForm(false);
  };
  return (
    <div>
      <div className="background">
        <div className="header">
          <div className="welcome"></div>
          <div className="account">
            <span>Account</span>
            <span>Logout</span>
            <span>Welcome Johana Carvajal</span>
          </div>
        </div>
        <div className="content-container">
          <h1 className="heading">ZyWie</h1>
          <div className="button-container">
            <button className="bgc">Enrollments</button>
            <button>Events</button>
            <button>Reports</button>
          </div>
        </div>
      </div>


{/* 
      <div class="secondcontainer">
        <h1 className="second">Enrollment Management</h1>
        <div className="content-container">
          <div className="second-container">
            <button>Active</button>
            <button>Completed</button>
            <button>New Enrollment</button>
          </div>
        </div>

      </div>
      <div className="filters">
        <p>Filters:none</p>
        <p>!</p>
      </div>


      <div className="table">
        <table>
          <tr>
            <th>Patient Name</th>
            <th>Status</th>
            <th>Enrollment Type</th>
            <th>Device ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Remaining Time</th>
            <th>Provider</th>
            <th>Location</th>
            <th>Primary Indication</th>
          </tr>

          <tr>
            <td>PLANTER,ELMORE</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202309/C881508</td>
            <td>
              4/26/2024 <br />
              1:30PM
            </td>
            <td>
              5/26/2024 <br />
              1:30PM
            </td>
            <td>27 Days</td>
            <td>Suvarchala Dara</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>RIVERA, LUIS</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202345/C9B6357</td>
            <td>
              4/16/2024 <br />
              3:27PM
            </td>
            <td>
              5/16/2024 <br />
              3:27PM
            </td>
            <td>17 Days</td>
            <td>Suvarchala Dara</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>HERNANDEZ,EVON</td>
            <td>Active</td>
            <td>14 Day MCT</td>
            <td>202345/C9B6370</td>
            <td>
              4/16/2024 <br />
              10:11AM
            </td>
            <td>
              4/30/2024 <br />
              10:11AM
            </td>
            <td>0 Days</td>
            <td>Amitra Caines</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>PRICE, JUDITH</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202345/C9B6339</td>
            <td>
              4/11/2024 <br />
              10:36AM
            </td>
            <td>
              5/11/2024 <br />
              10:36AM
            </td>
            <td>11 Days</td>
            <td>Amitra Caines</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>TOLMAN, KEVIN</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202311/C882541</td>
            <td>
              4/10/2024 <br />
              5:09pM
            </td>
            <td>
              5/10/2024 <br />
              5:09PM
            </td>
            <td>11 Days</td>
            <td>Suvarchala Dara</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>
        </table>


        <div className="pagination">
          <select className="items">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <p>Items per page</p>
          <p>Total Items:5</p>
        </div>
        <div className="buttons">
          <button>&lt;</button>
          <button>1</button>
          <button>&gt;</button>
        </div>
      </div> */}

{showEnrollmentForm ? (
  <NewEnrollmentForm />
): (
  <div> 
    
    <div class="secondcontainer">
        <h1 className="second">Enrollment Management</h1>
        <div className="content-container">
          <div className="second-container">
            <button>Active</button>
            <button class="bcolor" onClick={handleCompletedClick}>Completed</button>
            <button  onClick={handleNewEnrollmentClick}>New Enrollment</button>
          </div>
        </div><br/>
     

      </div>
      <hr />
      <div className="filters">
        <p>Filters:none</p>
        <p>!</p>
      </div>


      <div className="table">
        <table>
          <tr className='boxcolor'>
            <th>Patient Name</th>
            <th>Status</th>
            <th>Enrollment Type</th>
            <th>Device ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Remaining Time</th>
            <th>Provider</th>
            <th>Location</th>
            <th>Primary Indication</th>
          </tr>

          <tr className='boxcolor1'>
            <td>PLANTER,ELMORE</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202309/C881508</td>
            <td>
              4/26/2024 <br />
              1:30PM
            </td>
            <td>
              5/26/2024 <br />
              1:30PM
            </td>
            <td>27 Days</td>
            <td>Suvarchala Dara</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>RIVERA, LUIS</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202345/C9B6357</td>
            <td>
              4/16/2024 <br />
              3:27PM
            </td>
            <td>
              5/16/2024 <br />
              3:27PM
            </td>
            <td>17 Days</td>
            <td>Suvarchala Dara</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr className='boxcolor1'>
            <td>HERNANDEZ,EVON</td>
            <td>Active</td>
            <td>14 Day MCT</td>
            <td>202345/C9B6370</td>
            <td>
              4/16/2024 <br />
              10:11AM
            </td>
            <td>
              4/30/2024 <br />
              10:11AM
            </td>
            <td>0 Days</td>
            <td>Amitra Caines</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>PRICE, JUDITH</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202345/C9B6339</td>
            <td>
              4/11/2024 <br />
              10:36AM
            </td>
            <td>
              5/11/2024 <br />
              10:36AM
            </td>
            <td>11 Days</td>
            <td>Amitra Caines</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr className='boxcolor1'>
            <td>TOLMAN, KEVIN</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202311/C882541</td>
            <td>
              4/10/2024 <br />
              5:09pM
            </td>
            <td>
              5/10/2024 <br />
              5:09PM
            </td>
            <td>11 Days</td>
            <td>Suvarchala Dara</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>
        </table>


        <div className="pagination">
          <select className="items">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <p>Items per page</p>
          <p>Total Items:5</p>
        </div>
        <div className="buttons">
          <button>&lt;</button>
          <button>1</button>
          <button>&gt;</button>
        </div>
      </div> </div>
)}

      <div className="footer">
      <footer>
        <div className="footer-details">
        <p>Enrollments <span>|</span></p>
        <p>Events <span>|</span></p>
        <p>Reports <span>|</span></p>
        <p>1-877-858-7200</p>
        </div>
        <div className="copy"
        style={{
          display: "flex",
          marginLeft: "50px",
          marginTop:"30px",
          fontSize:"15px",


        }}
        >
          <p>copyright@2017 Zywfe,Inc.All rights reserved</p>
          <p>Terms of Use </p>
          <p>Privacy Policy</p>
          <p>System Status</p>
          <p>info@zywie.healthcare</p>
        </div>

      </footer>
      </div>
    </div>




  );
}

export default App;

