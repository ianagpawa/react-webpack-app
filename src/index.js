import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1 class='hello'>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);