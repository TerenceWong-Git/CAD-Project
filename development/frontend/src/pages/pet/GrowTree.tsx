import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function GrowTree() {
    const petId = useParams();
    const jwt = localStorage.getItem("token");
    const [petImg, setImg] = useState<any>({})
    useEffect(()=>{
        async function loadImg() {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pet/petImg/${petId.id}`,{headers: {Authorization: `Bearer ${jwt}`}})
            const json = await res.json()

            setImg(json)
        }
        loadImg()
    },[])
    return (
    
    <div>
    成長樹

    <div>
        {/* {petImg.map((item:any) => (
            <div key={item.id}>
                <img src={item.name}/>
                <div>{item.tag}</div>
                <p>{item.modifiedAt}</p>
            </div>
        ))} */}
    
    </div>
    
    <Link to={`/uploadgrowtree/${petId.id}`}><button>新增相片</button></Link>
    
    </div>
  );
}

export default GrowTree;
