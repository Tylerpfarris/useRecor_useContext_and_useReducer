import React from 'react';
import { doUndo, doRedo, doRecord } from '../../state/actions';
import { doCurrent } from '../../state/selectors';
import { useDispatch, useSelector } from '../../state/Provider';



function App() {
  const dispatch = useDispatch();
  
  const current = useSelector(doCurrent);
  return (
    <>
      <button data-testid="undo-button" onClick={() => dispatch(doUndo())}>
        undo
      </button>
      <button data-testid="redo-button" onClick={() => dispatch(doRedo())}>
        redo
      </button>
      <input
        data-testid='color-selector'
        type="color"
        value={current}
        onChange={({ target }) => dispatch(doRecord(target.value))}
      />
      <div
        data-testid='display-div'
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
