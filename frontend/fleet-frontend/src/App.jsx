import { useEffect, useState } from "react"
import socket from "./socket/socket"
import DashboardCards from "./components/DashboardCards"
import EventTable from "./components/EventTable"
import EventChart from "./charts/EventChart"
import VideoFeed from "./components/VideoFeed"
import AlertBox from "./components/AlertBox"
import EventPieChart from "./charts/EventPieChart"

function App() {

  const [events, setEvents] = useState([])
  const [alert, setAlert] = useState(null)

  useEffect(() => {

    socket.on("driver_event", (data) => {

      setEvents(prev => [data, ...prev])

      if (data.speed > 80) {
        setAlert(data)

        setTimeout(() => {
          setAlert(null)
        }, 4000)
      }

    })

  }, [])

  return (

    <div className="container">

      <h1 className="title">Fleet Monitoring Dashboard</h1>

      <AlertBox alert={alert} />

      <DashboardCards events={events} />

      <div className="grid">

        <div className="chartCard">
          <h2>Violation Analytics</h2>
          <EventChart events={events} />
        </div>

        <div className="videoCard">
          <VideoFeed />
        </div>


      <div className="chartCard">
      <h2>Violation Bar Graph</h2>
      <EventChart events={events} />
    </div>

      <div className="chartCard">
        <h2>Violation Distribution</h2>
        <EventPieChart events={events} />
      </div>

      </div>

      <EventTable events={events} />

    </div>

  )
}

export default App