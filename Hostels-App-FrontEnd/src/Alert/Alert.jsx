import React from "react";

class AlertMessage extends React.Component{
 constructor(props){
     super(props);
     this.state={
         message :this.props?.message
     }
 }
    render(){
     return(<div>
<div class="col-sm-6 col-md-6">
            <div class="alert alert-info">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
                    ×</button>
                <span class="glyphicon glyphicon-info-sign"></span> <strong>Empty Page!</strong>
                <hr class="message-inner-separator"/>
                <p>
                    {this.state.message}</p>
            </div>
        </div>
        </div>
     );
 }
}
export default AlertMessage;