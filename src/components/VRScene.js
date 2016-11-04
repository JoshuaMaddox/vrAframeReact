import React, { Component } from 'react'
import { Entity, Scene } from 'aframe-react'

// x-right, y-upwards, z-depth
// geo provides basic shape for entities
// All scenes and entities will go inside Scene Comp
//What Aframe calls components are really props in react
//A frame docs and react-aframe docs
//aframe-text
//aframe-bmfont-text-component
export default class VRScene extends Component {

  render() {
    return(
      <Scene>

        <Entity 
          light={{type: 'ambient'}}
          position={[0, 3, 0]}/>

        <Entity 
          geometry={{primitive: 'sphere'}} 
          radius={1}
          position={[5, 0, -5]}
          material={{color: '#c0392b'}} />

        <Entity 
          geometry={{primitive: 'box'}} 
          position={[1, 0, -5]}
          material={{color: '#34495e'}} />

      </Scene>
      
    )
  }
}