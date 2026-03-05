function startEventGenerator(io) {
  const events = ["SPEEDING", "HARSH_BRAKE", "DROWSINESS"];

  setInterval(() => {
    const event = {
      driver_id: Math.floor(Math.random() * 5) + 1,
      trip_id: Math.floor(Math.random() * 10) + 1,
      event_type: events[Math.floor(Math.random() * 3)],
      speed: Math.floor(Math.random() * 120),
    };

    io.emit("driver_event", event);

    console.log("Event Sent:", event);
  }, 3000);
}

module.exports = startEventGenerator;
