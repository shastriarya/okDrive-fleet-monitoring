function DashboardCards({ events = [] }) {

  const violations = events.filter(e => e.speed > 80).length

  const drivers = new Set(events.map(e => e.driver_id)).size

  const riskScore = violations * 10

  return (

    <div className="cards">

      <div className="card">
        <h3>Total Trips</h3>
        <p>{events.length}</p>
      </div>

      <div className="card">
        <h3>Live Drivers</h3>
        <p>{drivers}</p>
      </div>

      <div className="card">
        <h3>Violations</h3>
        <p className="danger">{violations}</p>
      </div>

      <div className="card">
        <h3>Risk Score</h3>
        <p>{riskScore}</p>
      </div>

    </div>

  )
}

export default DashboardCards