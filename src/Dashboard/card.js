export default  function Card (props){

    return (<>

            <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                               {props.data.title}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"> {props.data.salery}</div>
                        </div>
                        <div class="col">  {props.data.div}</div>
                        <div class="col-auto">
                        {props.data.pic}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}