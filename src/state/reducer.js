export const initialState = {
   before: [],
   after: [],
   current: '#FF0000',
};

export function recordReducer(state, action) {
   switch (action.type) {
      case 'DO_UNDO':
         return {
            ...state,
            before: state.before.slice(0, -1),
            after: [state.current, ...state.after],
            current: state.before[state.before.length - 1]
         };
      case 'DO_REDO':
         return {
            ...state,
            before: [...state.before, state.current],
            after: state.after.slice(1),
            current: state.after[0]
         };
      case 'DO_RECORD':
         return {
            ...state,
            before: [...state.before, state.current],
            current: action.payload
         };
      default:
         return state;
   }
}