import React, { useEffect } from 'react';
import { useLaunchMissinInfoQuery } from '../../generated/graphql';
import Details from './MissionInfo';


interface OwnProps {
    id: number;
}

const InfoContainer = ({ id }: OwnProps) => {
    const { data, error, loading, refetch } = useLaunchMissinInfoQuery({ variables: { id: String(id) } });

    useEffect(() => {
        refetch();
    }, [id]);

    if (loading) {
        return <div>...</div>;
    }

    if (error || !data) {
        return <h2 style={{textAlign:'center',marginTop:'155px',color:'white'}}>Select a flight from the List</h2>;
    }


    return (
        <div className='detail'><Details data={data} /></div>
    )
}

export default InfoContainer;