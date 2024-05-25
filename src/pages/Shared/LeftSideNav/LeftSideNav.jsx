import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    
    return (
        <div>
            <h2>Left Side Nav </h2>
            <div className="space-y-6">
            {
                categories.map(categorie=><NavLink className='block ml-4 font-semibold text-xl' key={categorie.id} to={`/categorie/${categorie.id}`}>{categorie.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;