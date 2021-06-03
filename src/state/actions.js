export const DO_UNDO = 'DO_UNDO';
export const doUndo = () => ({
   type: DO_UNDO,
})
export const DO_REDO = 'DO_REDO';
export const doRedo = () => ({
   type: DO_REDO,
})
export const DO_RECORD = 'DO_RECORD';
export const doRecord = (init) => ({
   type: DO_RECORD,
   payload: init
})