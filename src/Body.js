import React, { useEffect, useState } from "react"
import DevIcons from "./DevIcons"
import mainPage from "./letters"

export default function Body() {
    return (
        <div>
            <div className="mainRow">
                <div className="col">
                    <img src={require('./profile_img.jpg')} alt="" className="profileImage" />
                </div>
                <div className="col">
                    <h4 className="mainPageName">{mainPage.name}</h4>
                    <p className="mainPageDescription">{mainPage.descripition}</p>
                </div>
            </div>
            <DevIcons />
        </div>
    )
}