const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'What are you doing' },
    { id: 3, message: 'So what' },
    { id: 4, message: 'Yo' },
  ],
  dialogs: [
    { id: 1, name: 'Dimich' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Misha' },
  ]
},

dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer

