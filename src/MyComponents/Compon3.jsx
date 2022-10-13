import React from 'react'

export const Compon3 = () => {
    let ododo = {
        paddingtop:"5px",
        paddingbottom:"5px",
    }
    let ododwww = {
        marginBottom: "5px",
    }
    let odowwwowo = {
        marginBottom:"-16px",
    }
  return (
    <>
    <div className="container-sm mt-5 mb-5 p-6">
    <div className="container-sm mt-5 mb-5 p-6">
    <div className="container-sm  p-6">
    <div className="container-sm  p-6">
        <h1>Current Job opening</h1>
        <p className="card-text"><small className="text-muted">Description</small></p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" style={ododo} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnew" aria-expanded="true" aria-controls="collapseOne">
                
                <div className="card-body">
                    <p style={ododwww}><strong>Junior Accountant</strong></p>
                    
                    <div className="d-flex justify-content-start " style={odowwwowo}>
                        <p className="card-text p-1"><small className="text-muted">Date of posting:30/08/2022</small></p>
                        <p className="card-text p-1"><small className="text-muted">place: mumbai</small></p>
                    </div>
                </div>
              </button>
            </h2>
            <div id="collapseOnew" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" style={ododo} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoe" aria-expanded="false" aria-controls="collapseTwo">
                
                <div className="card-body">
                    <p style={ododwww}><strong>Account Executive</strong></p>
                    
                    <div className="d-flex justify-content-start" style={odowwwowo}>
                        <p className="card-text p-1"><small className="text-muted">Date of posting:30/08/2022</small></p>
                        <p className="card-text p-1"><small className="text-muted">place: mumbai</small></p>
                    </div>
                </div>
              </button>
            </h2>
            <div id="collapseTwoe" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" style={ododo} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreer" aria-expanded="false" aria-controls="collapseThree">
                
                <div className="card-body">
                    <p style={ododwww}><strong>Human Resource Genralist</strong></p>
                    
                    <div className="d-flex justify-content-start " style={odowwwowo}>
                        <p className="card-text p-1"><small className="text-muted">Date of posting:30/08/2022</small></p>
                        <p className="card-text p-1"><small className="text-muted">place: mumbai</small></p>
                    </div>
                </div>
              </button>
            </h2>
            <div id="collapseThreer" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" style={ododo} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourr" aria-expanded="false" aria-controls="collapseFour">
                <div className="card-body">
                    <p style={ododwww}><strong>Video Editor</strong></p>
                    
                    <div className="d-flex justify-content-start" style={odowwwowo}>
                        <p className="card-text p-1"><small className="text-muted">Date of posting:30/08/2022</small></p>
                        <p className="card-text p-1"><small className="text-muted">place: mumbai</small></p>
                    </div>
                </div> 
              </button>
            </h2>
            <div id="collapseFourr" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
