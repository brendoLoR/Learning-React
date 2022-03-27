import React, { useEffect, useState } from "react"
import api from "./services/api"

export default function DevIcons() {
    const [icons, setIcons] = useState()
    useEffect(() => {
        api.get("/dev-icons").then((response) => {
            setIcons(response.data)
        })

    }, [])

    return (
        <p align="center" dangerouslySetInnerHTML={{ __html:icons }} className="skillsIcons"/>
    )
}