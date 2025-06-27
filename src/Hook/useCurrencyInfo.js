import { useEffect, useState } from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log(apiKey);
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        .catch((err) => console.log(err));
        console.log(data);  
    }, [currency])
    console.log(data);
    return data; 
}

export default useCurrencyInfo