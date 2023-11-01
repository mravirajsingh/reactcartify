import React, { useEffect, useState } from 'react'
import customdata from '../../utils/helpers/data'

function ProductCard() {
    //console.log(customdata);
    const url = "https://jsonplaceholder.typicode.com/todos";
    const [data, setData] = useState([]);

    const fetchInfo = async() => {
        // return fetch(url)
        //     .then((res) => res.json())
        //     .then((d) => setData(d))
        const api = await fetch(url);
        const result = await api.json(); 
        for(let i=0; i<=result.length; i++){
            for(let j=0; j<=customdata.length; j++)
            {
                console.log("r",result[i].id)
                console.log("c",customdata[j].id)
                if(result[i].id == customdata[j].id){
                    setData(result);
                }
                

            }
        }
    }
    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <>
            <div className='p-10 grid grid-cols-4 gap-4'>
                {data.map((dataObj, index) => {
                    return (
                        <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg'>
                            <img src={dataObj.image} alt="img1" className='p-8 rounded-t-lg' />
                            <p className='text-xl font-semibold text-gray-900'>Price : {dataObj.id}</p>
                            <p className='text-xl font-semibold text-gray-900'>Name : {dataObj.title}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default ProductCard