import React from 'react'

function Alert(props) {
  return (
      <>
 <div className={`alert alert-${props.alert.type} role=alert alert-dismissible fade show`}  >
 <strong>{props.alert.type} </strong>:{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </>
  )
}

export default Alert
