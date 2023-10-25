import React from 'react'

const MiniPop = ({message}) => {
  return (
    <div>
       <div
      className="modal fade"
      id="miniPopUp"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content"
          style={{backgroundColor: "#93e2bb"}}
        >
          <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Thank You !
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

          <div className="modal-body"> {message}</div>

          {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default MiniPop
