import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";

function Root() {
  return <h1 class='hello'>Hello from React!</h1>;
}

const domNode = document.getElementById('Root');
const root = createRoot(domNode);
root.render(<Root />);