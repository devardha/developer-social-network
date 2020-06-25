import React from 'react';
import { NavLink } from 'react-router-dom';
import Styled from '@emotion/styled';
import Button from './Button';
import { Search } from 'react-feather';

function Navbar() {
    const isAuthenticated = false;

    const authUser = <div className="user-image"> </div>;

    const guessUser = (
        <>
            <NavLink to="/login">
                <Button className="btn btn-primary">Log In</Button>
            </NavLink>
            <Button className="btn" onClick={() => console.log('test')}>
                Sign Up
            </Button>
        </>
    );

    return (
        <NavbarStyled>
            <div className="navbar-brand">
                <span className="nav-title">Devspace</span>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <Search className="search-icon" />
            </div>
            <div className="nav-items">
                <NavLink to="/home">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/explore">
                    <li>Explore</li>
                </NavLink>
                {isAuthenticated ? (
                    <>
                        <NavLink to="/message">
                            <li>Message</li>
                        </NavLink>
                        <NavLink to="/profile">
                            <li>Profile</li>
                        </NavLink>
                    </>
                ) : (
                    ''
                )}
            </div>
            <div className="user-info">{isAuthenticated ? authUser : guessUser}</div>
        </NavbarStyled>
    );
}

const NavbarStyled = Styled.div`
    display:flex;
    align-items:center;
    position:relative;

    height:70px;
    padding:0 5%;
    background-color:#fff;
    border-bottom:1px solid rgba(22,24,35,0.12);

    a{
        color:#000;
    }

    .navbar-brand{
        width:150px;

        .nav-title{
            font-weight:700;
            font-size:1.25rem;
        }
    }

    .search-box{
        flex:1 1 auto;
        padding:0 1rem;
        position:relative;

        .search-icon{
            position: absolute;
            left: 2.25rem;
            top: .5rem;
            width: 1.2rem;
        }

        input{
            width: 100%;
            background-color: #f5f6f7;
            box-sizing: border-box;
            border-radius: 2rem;
            height: 2.5rem;
            padding: 0 1.5rem 0 3rem;
            font-size: .9rem;
            align-items: center;
            border: none;
        }
    }

    .nav-items{
        display:flex;
        
        li{
            list-style:none;
            margin: 0 .5rem;
            font-size:.9rem;
        }
    }

    .user-info{
        display:flex;
        justify-content:flex-end;
        min-width:150px;
        align-items:center;
        margin-left:auto;
        padding-left:1rem;

        .user-image{
            width:35px;
            height:35px;
            border-radius:50%;
            background-color:#000;
        }

        .btn{
            margin: 0 .25rem;
        }
    }

`;

export default Navbar;
