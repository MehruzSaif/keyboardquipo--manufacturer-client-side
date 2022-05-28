import { useEffect, useState } from "react";

const usePurchase = partId => {
    const [part, setPart] = useState({});

    useEffect(() => {
        const url = `https://fathomless-gorge-87844.herokuapp.com/part/${partId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setPart(data))

    }, [partId]);

    return [part]
}

export default usePurchase;