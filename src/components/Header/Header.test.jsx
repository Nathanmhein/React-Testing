import React from "react";
import { describe,it,expect, beforeEach, afterEach } from "vitest";
import { screen,render,cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
//import {Routes, Route} from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers)

import Header from ".";

describe ("Header Components",()=>{
    beforeEach(() => {
        render( <BrowserRouter> <Header/></BrowserRouter>)
    });

    afterEach(() => {
        cleanup();
    });

    it ("Display Nav-bar with 3 Children",()=>{
        const nav = screen.getByRole("navigation")
        expect (nav).toBeInTheDocument();
        expect (nav.childNodes.length).toBe(3)

    })

    it ("Change pages when the Nav Bar is clicked", async () => {
        expect(window.location.href).not.toContain("/shows")
        const shows = screen.getByText("Shows")
        await userEvent.click(shows)
        expect (window.location.href).toContain('/shows')
    })


})