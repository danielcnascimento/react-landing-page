import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import VisitCard from './cards/VisitCard';
import {places} from '../static/places';
import useWindowPosition from '../hooks/useWindowPosition';

const useStyle = makeStyles(({breakpoints})=>({
    root : {
        height:"100vh",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        [breakpoints.down('sm')]:{
            flexDirection:"column",
        }
    }
}))

const PlaceToVisit = () => {
    let classes = useStyle();
    let checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="place-to-visit">
            <VisitCard place={places[0]} checked={checked}/>
            <VisitCard place={places[1]} checked={checked}/>
        </div>
    )
}

export default PlaceToVisit
