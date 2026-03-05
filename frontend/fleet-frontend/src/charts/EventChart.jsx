import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

function EventChart({ events = [] }) {

  const data = [
    { type: "Speeding", value: events.filter(e => e.event_type === "SPEEDING").length },
    { type: "Brake", value: events.filter(e => e.event_type === "HARSH_BRAKE").length },
    { type: "Drowsy", value: events.filter(e => e.event_type === "DROWSINESS").length }
  ]

  return (

    <ResponsiveContainer width="100%" height={300}>

      <BarChart data={data}>
        <XAxis dataKey="type" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#4f46e5" />
      </BarChart>

    </ResponsiveContainer>

  )
}

export default EventChart