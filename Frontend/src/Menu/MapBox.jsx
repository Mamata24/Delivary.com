import React, { Component } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
import styled from './mapbox.module.css'

class MapBox extends Component{
    constructor(props){
        super(props);
        console.log(props)
        const {lat,lon} = props
        this.state = {
            viewport:{
                latitude: lat,
                longitude: lon,
                zoom: 15
            }
            
        }
    }

  render(){
    //   console.log(this.state.userLocation)
    const {viewport} = this.state
      return(
          <>
              <ReactMapGL {...viewport} width="42vw" height="50vh" mapStyle="mapbox://styles/mapbox/outdoors-v11"
              onViewportChange={viewport => this.setState({viewport})}
              mapboxApiAccessToken="pk.eyJ1Ijoic2lkZGhhcnRoa3VtYWFhciIsImEiOiJja2hjcnA2bXIwZHhsMzJuMWY5MGdjNjB2In0._QzEiI62pfEz_q2K_Flekg"> 
                    <Marker
                        latitude={viewport.latitude}
                        longitude={viewport.longitude}
                    >
                       <div className={styled.blink} style={{height:30,width:30,backgroundColor:"red",borderRadius:50}}></div>
                        <div><p>{this.props.restaurant_name}</p></div>
                    </Marker>
                    <div style={{position: 'absolute', right: 0}}>
                        <NavigationControl />
                    </div>
              </ReactMapGL>
          </>
      )
  }
}

export default MapBox