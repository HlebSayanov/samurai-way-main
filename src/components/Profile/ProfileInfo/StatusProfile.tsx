import React, {ChangeEvent, Dispatch} from 'react';
import {PostDataType} from "../../../redux/profiles-reducer";

type StatusProfileType={
    status: string
    updateStatus:(status:string)=>void
}
type StateType = {
    editMode: boolean
    status: string
}

export class StatusProfile extends React.Component<StatusProfileType> {
    state = {
        editMode: false,
        status: this.props.status
    }


    setEditMode = ()=> {
        this.setState({
            editMode: true
        })
    }
    deactEditMode=()=> {

        this.setState({
            editMode: false
        })
  this.props.updateStatus(this.state.status)
    }
    onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({status:e.currentTarget.value}
        )

    }

    componentDidUpdate(prevProps: StatusProfileType, prevState:StateType):void{
        debugger
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return(
            <>
                {this.state.editMode
                ? <div >
                        <input
                            onChange={this.onChange}
                            onBlur={this.deactEditMode}
                            autoFocus
                            value={this.state.status}/>
                 </div>
                : <div onDoubleClick={this.setEditMode}>
                        {this.props.status || 'Not Status!!'}
                    </div>
                }

            </>
        )


    }
}
