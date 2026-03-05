const db = require("../config/db");

exports.createEvent = (req, res) => {
  const { driver_id, trip_id, event_type, speed } = req.body;

  const sql = `
    INSERT INTO driver_events 
    (driver_id, trip_id, event_type, speed)
    VALUES (?, ?, ?, ?)
    `;

  db.query(sql, [driver_id, trip_id, event_type, speed], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Event Stored",
      data: req.body,
    });
  });
};
