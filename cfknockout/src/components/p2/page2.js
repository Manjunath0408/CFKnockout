/*
    dashboard
*/

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
import Header from '../base/Header';
import { Dashboard } from "./components/Dashboard";

export const Page2 = () => {
    return (
        <Dashboard />
    )
}