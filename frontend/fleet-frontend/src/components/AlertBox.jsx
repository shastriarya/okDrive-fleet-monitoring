function AlertBox({ alert }) {

  if (!alert) return null

  return (
    <div className="alertBox">

      ⚠ DRIVER {alert.driver_id} SPEEDING AT {alert.speed} KM/H

    </div>
  )

}

export default AlertBox