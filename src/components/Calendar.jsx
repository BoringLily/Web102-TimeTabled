import React from "react";
import Event from "./Event";

const Calendar = () => {

    return (
        <div className="Calendar">
<table>
  <thead>
       <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
      </tr>         
  </thead>
  <tbody>
  <tr>
          <td className="time"> 08:00 am</td>
          <Event event= 'Coffee ' color ='green' location='Home'/>
          <Event event= 'Wake Up' color ='yellow' location='Bed'/>
          <Event event= 'Coffee ' color ='green' location='Home'/>
          <Event event= '2x Espresso ' color ='yellow' location='Next to Fridge'/>
          <Event event= 'Sleep' color ='green' location='Somewhere'/>
          <Event event= 'IDK Anymore' color ='no' location='404'/>
          <Event event= 'New Startup' color ='pink' location='In your Dreams'/>
      </tr>
      <tr>
          <td className="time"> 09:00 am</td>
          <Event event= 'Code' color ='blue' location='Computer'/>
          <Event event= 'Write Code' color ='pink' location='Computer'/>
          <td></td>
          <Event event= '300 Errors' color ='pink' location=''/>
          <td></td>
          <td></td>
          <Event event= 'Back to reality' color ='yellow' location='Bed'/>
      </tr>
      <tr>
          <td className="time"> 10:00 am</td>
          <Event event= 'Code More' color ='yellow' location=''/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time"> 11:00 am</td>
          <Event event= 'New Ideas' color ='pink' location='Outside the box'/>
          <Event event= 'Coffee ' color ='green' location='On the roof'/>
          <Event event= 'BUGS' color ='pink' location=''/>
          <Event event= 'Give Up' color ='blue' location='¯\_(ツ)_/¯'/>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time"> 12:00 pm</td>
          <Event event= 'Monster time' color ='brown' location='At desk'/>
          <Event event= 'More Coffee ' color ='yellow' location='Bath'/>
          <Event event= 'Server Crashed' color ='brown' location='localhost'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time"> 01:00 pm</td>
          <Event event= 'Fix bugs' color ='pink' location='Not on Earth'/>
          <Event event= 'Develop stuff' color ='green' location='Limbo'/>
          <Event event= 'cry' color ='blue' location='floor'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time"> 02:00 pm</td>
          <Event event= 'Fix more bugs' color ='blue' location='VsCode'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time"> 03:00 pm</td>
          <Event event= 'First Commit' color ='brown' location='Local Repo'/>
          <td></td>
          <Event event= 'REST' color ='pink' location=''/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time"> 04:00 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time"> 05:00 pm</td>
          <Event event= 'Play Games' color ='orange' location='PC'/>
          <Event event= 'Sleep' color ='pink' location='In the wall'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>

  </tbody>    
</table>
        </div>

    )
}




export default Calendar;