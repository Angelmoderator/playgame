import React, { useContext } from "react";
import {Switch, Route, Redirect, publicRoutes} from 'react-router-dom'
import { authRoutes } from "../pages/routes";
import { Context } from "../index";
import {isAuth} from ""

const AppRouter = () => {

    const {user} = useContext(Context)
    const isAuth = false


    return (
      <>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact />
            )}
          
    </>
    )
}

export default AppRouter;