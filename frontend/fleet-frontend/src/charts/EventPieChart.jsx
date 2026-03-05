import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

function EventPieChart({ events = [] }) {

  const data = [
    { name: "Speeding", value: events.filter(e => e.event_type === "SPEEDING").length },
    { name: "Brake", value: events.filter(e => e.event_type === "HARSH_BRAKE").length },
    { name: "Drowsy", value: events.filter(e => e.event_type === "DROWSINESS").length }
  ]

  const COLORS = ["#ef4444", "#f59e0b", "#6366f1"]

  return (

    <ResponsiveContainer width="100%" height={300}>

      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >

          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}

        </Pie>

        <Tooltip />
        <Legend />

      </PieChart>

    </ResponsiveContainer>

  )
}

export default EventPieChart