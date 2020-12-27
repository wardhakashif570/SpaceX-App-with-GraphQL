import React from 'react';
import {LaunchMissinInfoQuery} from '../../generated/graphql';



interface Props {
    data: LaunchMissinInfoQuery;
  }

 const Details:React.FC<Props> = ({data}) => {

    if (!data.launch) {
        return <div>No launch available</div>;
      }

    return (
        <div style={{textAlign:'center',marginTop:'155px' ,color:'White',textDecoration:'underline'}} >
      <div >
        <h3><span style={{color:'White'}}>Flight Number:</span> {data.launch.flight_number} 
        <br /><br></br>
        <span style={{color:'White'}}>Mission Name:</span> {data.launch.mission_name}:
        {data.launch.launch_success ? (
          <span style={{ color: 'green' }}>Success</span>
        ) : (
          <span style={{ color: 'red' }}>Failed</span>
        )}
        </h3>
        
      </div>
      <h3 >              
      <span style={{color:'White'}}>Launch Year:</span> {data.launch.launch_year}
      <br></br>
        <br />
        <span style={{color:'White'}}>Launch Site:</span> {data.launch.launch_site?.site_name}
        <br /><br></br>
        <span style={{color:'White'}}>{data.launch.rocket &&
          ` Rocket Name: ${data.launch.rocket.rocket_name}  Type of ${data.launch.rocket.rocket_type}`}</span>
      </h3>
       <h3 ><span style={{color:'White'}}>Launch Details:</span> {data.launch.details}</h3>
       

     
      <h3 ><span style={{color:'Black',textDecoration:'underline'}}>Video Link:</span><span style={{color:'Red'}}> <a>{data.launch.links?.video_link}</a></span></h3>
      <br></br>
       <h3 style={{color:'Black',textDecoration:'underline'}}> Images</h3>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div >
     
           {data.launch.links.flickr_images.map(image =>
            image ? <img className='img' src={image}  key={image} alt="Detailed Images" style={{width:'300px', height:'300px'}} /> : null,
          )}
        </div>
      )} 
      
    </div>
    );
}

export default Details;