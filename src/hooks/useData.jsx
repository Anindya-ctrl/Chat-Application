import { useReducer, useEffect } from 'react';
import { DATABASE } from '../firebaseSetup';

const ACTIONS = {
    UPDATE_ROOM_LIST: 'update-room-list',
    UPDATE_MESSAGES_IN_THIS_ROOM: 'update-messages-in-this-room',
};
const { UPDATE_ROOM_LIST, UPDATE_MESSAGES_IN_THIS_ROOM } = ACTIONS;

const reducer = (state, { type, payload }) => {

    switch(type) {
        case UPDATE_ROOM_LIST:
            return {
                ...state,
                roomList: payload.roomList,
            }
        case UPDATE_MESSAGES_IN_THIS_ROOM:
            return {
                ...state,
                messagesInThisRoom: payload.messagesInThisRoom,
            }
        default:
            return state;
    }
}

function useData(roomId = null) {
    const [ state, dispatch ] = useReducer(reducer, {
        roomList: [],
        messagesInThisRoom: [],
    });

    useEffect(() => {
        return DATABASE.rooms?.orderBy('createdAt').onSnapshot(snapshot => {
            return dispatch({
                type: UPDATE_ROOM_LIST,
                payload: {
                    roomList: snapshot.docs.map(DATABASE.formatDoc),
                },
            });
        });
    }, []);

    useEffect(() => {
        return roomId && DATABASE.rooms
            ?.doc(roomId)
            .collection('messages')
            .orderBy('sentAt', 'asc')
            .onSnapshot(snapshot => {
                return dispatch({
                    type: UPDATE_MESSAGES_IN_THIS_ROOM,
                    payload: {
                        messagesInThisRoom: snapshot.docs.map(DATABASE.formatDoc),
                    },
                })
            });
    }, [ roomId ]);

    return state;
}

export default useData;
