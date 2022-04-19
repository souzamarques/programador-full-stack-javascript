import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PlanetsScreen from './screens/planets';
import PlanetScreen from './screens/planet';
import NotFoundScreen from './screens/notFound';

const Routes = () => {
    return(
    <BrowserRouter>
        <Route path='/' element={<PlanetsScreen />} />
        <Route path='/planet/:id' element={<PlanetScreen />} />
        <Route path='*' element={NotFoundScreen} />
    </BrowserRouter>
    )
}

export default Routes;
