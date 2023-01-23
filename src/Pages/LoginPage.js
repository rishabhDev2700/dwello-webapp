import React from 'react';
import {DwelloTitle} from '../components/DwelloTitle';
import {GoogleLoginbar} from '../components/GoogleLoginbar';
export function LoginPage() {
    return (
    <div>
        <DwelloTitle>Dwello</DwelloTitle>
        <div>Easily Find Your Senior</div>
        <div>Find out what your peers have rated you</div>
        <div>Join Clubs</div>
        <div>Rate your Professors</div>
        <GoogleLoginbar></GoogleLoginbar>
    </div>
    )
}
    