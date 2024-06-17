import { CSSProperties, ChangeEventHandler, useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import './customeNode.css';

const handleStyle: CSSProperties = {
  left: 10,
};

export function TextUpdaterNode({ data }: { data: string }) {
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className='text-updater-node'>
      <Handle type='target' position={Position.Top} />
      <label htmlFor='text'>Text:</label>
      <input
        id='text'
        name='text'
        defaultValue={data}
        onChange={onChange}
        className='nodrag'
      />
      <Handle type='source' position={Position.Bottom} id='a' />
      <Handle
        type='source'
        position={Position.Bottom}
        id='b'
        style={handleStyle}
      />
    </div>
  );
}
