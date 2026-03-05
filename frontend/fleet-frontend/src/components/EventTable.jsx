function EventTable({ events = [] }) {

  return (

    <div className="tableContainer">

      <h2>Driver Events</h2>

      <table>

        <thead>
          <tr>
            <th>Driver</th>
            <th>Trip</th>
            <th>Event</th>
            <th>Speed</th>
          </tr>
        </thead>

        <tbody>

          {events.map((e, index) => (

            <tr key={index}>
              <td>{e.driver_id}</td>
              <td>{e.trip_id}</td>
              <td>{e.event_type}</td>
              <td className={e.speed > 80 ? "danger" : ""}>{e.speed}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default EventTable