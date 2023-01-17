import React, { useEffect } from 'react'

function GrowTree() {
    const petImage =[
            {id:1, photoName: "funny.jpg", is_private: true, date: "16-10-2022" },
            {id:2, photoName: "funny.jpg", is_private: true, date: "16-10-2022" },
            {id:3, photoName: "funny.jpg", is_private: true, date: "16-10-2022" }
    ]

    useEffect(()=>{
        async function loadImg() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/petImage`)
            const json = await res.json()
        }
    })
    return (
    
    <div>
    成長樹

    <div>
        {petImage.map(petImage => (
            <div key={petImage.id}>
                <img src={petImage.photoName}/>
                <p>{petImage.date}</p>
            </div>
        ))}

    
    
    
    </div>
    
    
    
    </div>
    )
}

export default GrowTree