import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id='encabezado_producto'>Ultimos productos</h1>

        <section id="productos" className='container mt-5'>
          <div className='row'>
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
                  <p className='card-text'>$750.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-block'>
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