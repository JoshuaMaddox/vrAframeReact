//loads the aframe library
import 'aframe'
import React from 'react';
import { render } from 'react-dom';

import Layout from './components/Layout';
import VRScene from './components/VRScene';

render(
  <VRScene/>,
  document.getElementById('root')
);
