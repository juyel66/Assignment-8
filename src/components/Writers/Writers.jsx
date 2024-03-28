

import { useEffect, useState } from "react";
import WritersData from "../writersData/WritersData";

const Writers = () => {
    const [writers, setWriters] = useState([]);

    useEffect(() => {
        fetch('WriteData.json')
            .then(res => res.json())
            .then(data => setWriters(data));
    }, []);

    return (
        <div className="mt-7">
            <h1 className="text-4xl flex justify-center items-center bg-gray-300 h-16 rounded-xl font-bold text-green-500">Top Writers: {writers.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
                {writers.map(writer => (
                    <WritersData key={writer.id} w={writer} />
                ))}
            </div>
        </div>
    );
};

export default Writers;
