import React, {ChangeEvent} from 'react';
import {StoreType} from "../../redux/state";
import {ActionsTypesDialogs, addMessageAC, updateAddMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from '../../storeContext';

type DialogsType = {
    store: StoreType // state
    dispatchDialogPage: (action: ActionsTypesDialogs) => void

}


export const DialogsContainer = () => {



    return (
        <>
            <StoreContext.Consumer>
                {
                    (store)=>{
                        let dialogItems = store.getState().dialogs.dialogsALl
                        let messageItems = store.getState().dialogs.messages
                        let Newmessage = store.getState().dialogs.newMessageText

                        const addMessageTextArea = (value: string) => {
                            store.dispatch(updateAddMessageAC(value))
                        }

                        const AddMessageOnClick = (value:string) => {
                            store.dispatch(addMessageAC(value))
                        }
                        return <Dialogs dialogItems={dialogItems}
                                        messageItems={messageItems}
                                        NewMessage={Newmessage}
                                        addMessageTextArea={addMessageTextArea}
                                        AddMessageOnClick={AddMessageOnClick}

                        />
                    }
                }


            </StoreContext.Consumer>

        </>
    );
};

