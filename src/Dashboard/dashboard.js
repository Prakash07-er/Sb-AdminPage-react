import Card from './card';
import Areachart from './areachart';
import Piechart from './piechart';
import Projectcard from './projectcard';
import Color from './color';
import Illustration from './ilustration';
import Approach from './approach'

export default  function Dashbaoard(){

    const carddata =[
        {
            title:" Earnings (Monthly)",
            salery: "$40,000",
            pic: <i class="fas fa-calendar fa-2x text-gray-300"></i>


        },
        {
            title:" Earnings (Annual)",
            salery: "$215,000",
            pic: <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>


        },
        {
            title:"Tasks",
            salery: "50%",
            pic:  <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>,
            // div: <div class="progress progress-sm mr-2">
            //             <div class="progress-bar bg-info" role="progressbar"
            //                 ></div>
            //         </div>
            


        },
        {
            title:" Pending Requests",
            salery: "18",
            pic: <i class="fas fa-comments fa-2x text-gray-300"></i>

        },
         {
            title:" Pending Requests",
            salery: "18",
            pic: <i class="fas fa-comments fa-2x text-gray-300"></i>

        },
        {
            title:" Pending Requests",
            salery: "18",
            pic: <i class="fas fa-comments fa-2x text-gray-300"></i>

        }
    ]

    return(<>
    
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a  class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" href="index.html" ><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

                <div class="row">
                    {
                        carddata.map((obj) => {
                            return(
                                    <Card data={obj}></Card>
                                )
                        })
                        
                    }
                    
                </div>
                <div class="row">
                    <Areachart></Areachart>
                    <Piechart></Piechart>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <Projectcard></Projectcard>
                        <div class="row">
                            <Color></Color>
                         </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <Illustration></Illustration>
                        <Approach></Approach>
                    </div>
                </div>
              

    </>
    )
}