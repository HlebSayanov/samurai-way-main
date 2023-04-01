import React from 'react';

export class StatusProfile extends React.Component<{ value: string }> {
    state = {
        editMode: false
    }

    setEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return(
            <>
                {this.state.editMode
                ? <div >
                        <input

                            onBlur={this.deactEditMode.bind(this)}
                             autoFocus
                            value={this.props.value}/>
                 </div>
                : <div onDoubleClick={this.setEditMode.bind(this)}>
                        {this.props.value}
                    </div>
                }

            </>
        )


    }
}
