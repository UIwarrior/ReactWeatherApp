
export const WeatherCard = () => {
    return (
<section className="vh-100" style={{backgroundColor: '#eee;'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <div className="card" style={{borderRadius: '10px'}}>
          <div className="bg-image ripple" data-mdb-ripple-color="light"
            style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px;'}}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw2.webp"
              className="w-100" />
            <div className="mask" style={{backgroundColor: 'white'}}>
              <div className="d-flex justify-content-between p-4">
                <a href="#!" className="text-white"><i className="fas fa-chevron-left fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fas fa-cog fa-lg"></i></a>
              </div>
              <div className="text-center text-white">
                <p className="h3 mb-4">Clear night</p>
                <p className="h5 mb-4">Detroit, US</p>
                <p className="display-2"><strong>20°C</strong> </p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-center">
            <a href="#!" className="text-body"><i className="fas fa-chevron-up fa-lg mb-4"></i></a>
            <div className="d-flex justify-content-between mb-3">
              <p className="h5 fw-normal">Yesterday</p>
              <p className="h5 fw-normal"><i className="fas fa-sun pe-2"></i> 23°C</p>
            </div>
            <div className="d-flex justify-content-between" style={{color: '#aaa;'}}>
              <p className="h5 fw-normal">Tommorow</p>
              <p className="h5 fw-normal"><i className="fas fa-cloud pe-2"></i> 21°C</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    )
}



