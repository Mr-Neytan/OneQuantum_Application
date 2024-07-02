import React from 'react'
import "./Schedule.css"



const Schedule = () => {
    const data = [
        ["07:00", "Registration "],
        ["08:00","Opening Remarks"],
        ["08:45", "Coffee Break"],
        ["09:00", "Workshop Activities"],
        ["12:00", "Lunch Break"],
        ["1:00", "Keynote"],
        ["3:00", "Afternoon Break"],
        ["4:00", "Closing Remarks"]
    ]
  return (
    <div className='section'>
        
        <div className='schedule'>
        <p className='caption'>SCHEDULE</p>
            <table>
                <tr>
                    <th>Time</th>
                    <th>Activity</th>
                </tr>
                {data.map((time) => (
                    <tr>
                        <td>{time[0]}</td>
                        <td>{time[1]}</td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
  )
}

export default Schedule