import * as React from 'react';
import './style.css';
import TreeModel from 'tree-model';
import ReactJson from 'react-json-view';

export default function App() {
  let tree = new TreeModel();

  let root = tree.parse({
    id: 1,
    children: [
      {
        id: 11,
        children: [{ id: 111 }],
      },
      {
        id: 12,
        children: [{ id: 121 }, { id: 122 }],
      },
      {
        id: 13,
      },
    ],
  });

  const updateNode = () => {
    var node12 = root.first(function (node) {
      return node.model.id === 12;
    });
  };

  return (
    <div>
      <ReactJson src={root.model} />
      <button onClick={updateNode}>Test</button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
