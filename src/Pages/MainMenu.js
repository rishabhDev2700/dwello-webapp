import React from 'react';
import { DwelloTitle } from '../components/DwelloTitle';
import { Tile } from '../components/Tile';
import { FaLaughBeam, FaUniversity, FaUserFriends } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { SlNotebook } from 'react-icons/sl';
import { BsPersonCheckFill, BsFillPersonPlusFill, BsBellFill } from 'react-icons/bs';
import styled from 'styled-components';

const MenuWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
`

export function MainMenu() {
    return (
        <div>
            <DwelloTitle>Dwello</DwelloTitle>

            <MenuWrapper>
                <Tile icon={<FaUserFriends />} text="My Seniors" />
                <Tile icon={<FaLaughBeam />} text="My Profile" />
                <Tile icon={<FaUniversity />} text="My College" />
                <Tile icon={<RiTeamLine />} text="Clubs" />

                <Tile icon={<BsPersonCheckFill />} text="Rate/Search Faculties" />
                <Tile icon={<BsFillPersonPlusFill />} text="Rate/Search Friends" />
                <Tile icon={<BsBellFill />} text="Notifications" />
                <Tile icon={<SlNotebook />} text="Notes and Question Paper" />
            </MenuWrapper>
        </div>
    )
}
