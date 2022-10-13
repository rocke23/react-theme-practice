import React from 'react'

export const Compon5 = () => {
  const ldow = {
    height:"40vh", 
    bottom: "-1px",
    marginBottom: "2px",
    // background: "linear-gradient(1deg, black, #000000,#000000c2)",
    position: "absolute",
  }
  return (
    <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5 mb-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <div className="card text-bg-dark">
            {/* <img src="S1.png" className="card-img" alt="..."/> */}
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

            <div className="card-img-overlay">
              <div className="row align-items-end">
                <div className="container d-md-flex justify-content-between p-6" style={ldow}>
                
                  <div>
                    <p><small className="text-muted">Features</small></p>
                    <h2><strong>Womens are changing the world</strong></h2>
                    <p><small className="text-muted">Thisi international Women's Day, let's come together and work towards achieving an equal future.</small></p>
                  </div>
                  <div>
                    <ul>        
                      <li><p><small className="text-muted">Date: 20-09-2022</small></p></li>
                      <li><p><small className="text-muted">time : 10:30</small></p></li>
                      <li><p><small className="text-muted">place: school garden</small></p></li>
                    </ul><p className="card-text">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">          
          <div className="card text-bg-dark">
            {/* <img src="./S1.png" className="card-img" alt="..."/> */}
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

            <div className="card-img-overlay">
              <div className="row align-items-end">
                <div className="container-lg d-md-flex justify-content-between p-6" style={ldow}>
                
                  <div>
                    <p><small className="text-muted">Features</small></p>
                    <h2><strong>Womens are changing the world</strong></h2>
                    <p><small className="text-muted">Thisi international Women's Day, let's come together and work towards achieving an equal future.</small></p>
                  </div>
                  <div>
                    <ul>        
                      <li><p><small className="text-muted">Date: 20-09-2022</small></p></li>
                      <li><p><small className="text-muted">time : 10:30</small></p></li>
                      <li><p><small className="text-muted">place: school garden</small></p></li>
                    </ul><p className="card-text">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <div className="card text-bg-dark">
            {/* <img src="S1.png" className="card-img" alt="..."/> */}
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

            <div className="card-img-overlay">
              <div className="row align-items-end">
                <div className="container d-md-flex justify-content-between p-6" style={ldow}>
                
                  <div>
                    <p><small className="text-muted">Features</small></p>
                    <h2><strong>Womens are changing the world</strong></h2>
                    <p><small className="text-muted">Thisi international Women's Day, let's come together and work towards achieving an equal future.</small></p>
                  </div>
                  <div>
                    <ul>        
                      <li><p><small className="text-muted">Date: 20-09-2022</small></p></li>
                      <li><p><small className="text-muted">time : 10:30</small></p></li>
                      <li><p><small className="text-muted">place: school garden</small></p></li>
                    </ul><p className="card-text">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}
