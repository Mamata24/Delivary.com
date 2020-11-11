import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapBox(props){
    
    const {lat,lon} = props

    console.log(lat,lon)

    const Map = ReactMapboxGl({
        accessToken:
        'pk.eyJ1Ijoic2lkZGhhcnRoa3VtYWFhciIsImEiOiJja2hjcnA2bXIwZHhsMzJuMWY5MGdjNjB2In0._QzEiI62pfEz_q2K_Flekg'
    });
    const style = "mapbox://styles/mapbox/streets-v9"
    return(
        <>
            <Map
                style={style}
                containerStyle={{
                height: '500px',
                width: '550px'
            }}
            center={{lat,lon}}
            >
            <Layer type="circle" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[]} />
            </Layer>
            </Map>;
        </>
    )
}

export default MapBox