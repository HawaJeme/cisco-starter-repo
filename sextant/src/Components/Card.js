import React, { useState, useEffect } from "react";

function Card(props){
    const [IPv4, setIPv4] = useState()
    const [IPv6, setIPv6] = useState()

    useEffect(()=> {
        async function fetchIP() {
            const resV4 = await fetch("https://api.ipify.org?format=json")
            const IPv4 = await resV4.json()
            const resV6 = await fetch("https://api64.ipify.org?format=json")
            const IPv6 = await resV6.json()
            setIPv4(IPv4.ip)
            setIPv6(IPv6.ip)
        }
        fetchIP()
    }, [])

    const outcome = props.Name == "Public IPV4" ? IPv4 : IPv6

    return (
        <div className="card">
            <h2 className="card-up">{props.Name}</h2>
            <p className="card-down">{outcome || 0}</p>
        </div>
    )
}

export default Card