
import React from 'react';
import { useMissionsInfoQuery } from '../../generated/graphql'
import MissionList, { OwnProps } from './MissionList';
import './style.css'


export const MissionContainer = (props: OwnProps) => {


    const { data, error, loading } = useMissionsInfoQuery();
    if (loading) {
        return <h1>Loading</h1>

    }

    if (error || !data) {
        return <div>Error please check your internet connection.</div>
    }


    return (

       
        <div data-spy="scroll">
{/*             
            <h1 style={{textAlign:'center',marginLeft:'450px'}}></h1> */}
             <h1 style={{color:'Red', margin:'15px',textAlign:'center' ,fontSize:'50px'}}>SpaceX App</h1>
            <MissionList data={data} {...props} />
        </div>
    )
}
