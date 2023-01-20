import * as React from 'react';
import './style.css';
import TreeModel from 'tree-model'


export default function App() {

 let  tree = new TreeModel();

let root = tree.parse({
    id: 1,
    children: [
        {
            id: 11,
            children: [{id: 111}]
        },
        {
            id: 12,
            children: [{id: 121}, {id: 122}]
        },
        {
            id: 13
        }
    ]
});



  return (
    <div>
 
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
