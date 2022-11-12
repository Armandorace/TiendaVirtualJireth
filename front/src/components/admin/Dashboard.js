import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

export const Dashboard = () => {
  return (
    <Fragment>
        <div className='row'>
            <div className='col-12 col-md-2'>
                <Sidebar />
            </div>

            <div className='col-12 col-md-10'>
                <h1 className='my-4'>Panel de Control</h1>

                <Fragment>
                    <MetaData title={"Panel de Control"}/>
                    {/*Tarjeta 1 */}
                    <div className='row pr-4'>
                        <div className='col-xl-12 col-sm-12 mb-3'>
                            <div className='card text-white bg-primary o-hidden h-100'>
                                <div className='card-body'>
                                    <div className='text-center card-font-size'>Ventas totales<br /><b>$25.000.000</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Tarjeta 2 */}
                    <div className='row pr-4'>
                        <div className='col-xl-12 col-sm-12 mb-3'>
                            <div className='card text-white bg-primary o-hidden h-100'>
                                <div className='card-body'>
                                    <div className='text-center card-font-size'>Ventas totales<br /><b>$25.000.000</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Tarjeta 3 */}
                    <div className='row pr-4'>
                        <div className='col-xl-12 col-sm-12 mb-3'>
                            <div className='card text-white bg-primary o-hidden h-100'>
                                <div className='card-body'>
                                    <div className='text-center card-font-size'>Ventas totales<br /><b>$25.000.000</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Tarjeta 4 */}
                    <div className='row pr-4'>
                        <div className='col-xl-12 col-sm-12 mb-3'>
                            <div className='card text-white bg-primary o-hidden h-100'>
                                <div className='card-body'>
                                    <div className='text-center card-font-size'>Ventas totales<br /><b>$25.000.000</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </div>
        </div>
    </Fragment>
  )
}