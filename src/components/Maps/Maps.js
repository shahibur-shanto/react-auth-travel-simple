import {
    interaction,layer,custom,control,
    Interaction,Overlays,Controls,
    Map,Layers,Overlay,Util
  } from 'react-openlayers';
  

const Maps = () => {
    return (
        <div>
            <Map view={{center:[0,0],zoom:2}}>
        <Layers>
          <layer.Tile></layer.Tile>
        </Layers>
      </Map>
        </div>
    );
};

export default Maps;