import React from "react";
import "./Header.css";
import { Arrow, OlxLogo, Search, SellButton, SellButtonPlus } from "../../assets";

function Header() {
    return (
        <div className="headerParentDiv">
            <div className="headerChildDiv">
                <div className="brandName">
                    <OlxLogo />
                </div>
                <div className="placeSearch">
                    <Search />
                    <input type="text" />
                    <Arrow />
                </div>
                <div className="productSearch">
                    <div className="input">
                        <input type="text" placeholder="Find car,mobile phone and more..." />
                    </div>
                    <div className="searchAction">
                        <Search color="#ffffff" />
                    </div>
                </div>
                <div className="language">
                    <span> ENGLISH </span>
                    <Arrow />
                </div>
                <div className="loginPage">
                    <span>Login</span>
                    <hr />
                </div>

                <div className="sellMenu">
                    <SellButton />
                    <div className="sellMenuContent">
                        <SellButtonPlus />
                        <span>SELL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
