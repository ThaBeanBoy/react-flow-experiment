/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  Controls,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  addEdge,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { TextUpdaterNode } from './components/customNode';

const initialNodes: Node<any, string | undefined>[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello' },
    type: 'input',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { label: 'World' },
  },
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 30, y: 30 },
    data: { value: 123 },
  },
];

const initialEdges: Edge<any>[] = [];

function App() {
  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  const [nodes, setNodes] =
    useState<Node<any, string | undefined>[]>(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
