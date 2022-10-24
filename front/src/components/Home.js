import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id='encabezado_producto'>Ultimos productos</h1>

        <section id="productos" className='container mt-5'>
          <div className='row'>
            {/*producto 1*/}
            <div className='col-sm-12 col-md6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/kit4.jpeg' alt='Kit de 4 Camaras'></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id='titulo_producto'><a href='http://localhost:3000'>Kit de 4 Camaras</a></h5>
                  <div className='rating mt-auto'>
                    <div className='rating-outer'>
                      <div className='rating-inner'></div>
                    </div>
                    <span id='No_de_opiniones'> 5 reviews</span>
                  </div>
                  <p className='card-text'>$750.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>
            {/*producto 2 */}

            <div className='col-sm-12 col-md6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/kit6.jpeg' alt='Kit de 6 Camaras'></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id='titulo_producto'><a href='http://localhost:3000'>Kit de 6 Camaras</a></h5>
                  <div className='rating mt-auto'>
                    <div className='rating-outer'>
                      <div className='rating-inner'></div>
                    </div>
                    <span id='No_de_opiniones'> 5 reviews</span>
                  </div>
                  <p className='card-text'>$950.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>
            {/*producto 3 */}

            <div className='col-sm-12 col-md6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/domo.jpeg' alt='Camara domo 2mpx'></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id='titulo_producto'><a href='http://localhost:3000'>Camara domo 2mpx</a></h5>
                  <div className='rating mt-auto'>
                    <div className='rating-outer'>
                      <div className='rating-inner'></div>
                    </div>
                    <span id='No_de_opiniones'> 16 reviews</span>
                  </div>
                  <p className='card-text'>$120.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>
            {/*producto 4 */}

            <div className='col-sm-12 col-md6 col-lg-3 my-3'>
              <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/bala.jpeg' alt='Camara tipo bala'></img>
                <div className='card-body d-flex flex-column'>
                  <h5 id='titulo_producto'><a href='http://localhost:3000'>Camara tipo bala</a></h5>
                  <div className='rating mt-auto'>
                    <div className='rating-outer'>
                      <div className='rating-inner'></div>
                    </div>
                    <span id='No_de_opiniones'> 15 reviews</span>
                  </div>
                  <p className='card-text'>$120.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                    Ver detalle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        
    </Fragment>
  )
}
export default Home