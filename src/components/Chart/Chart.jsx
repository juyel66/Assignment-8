// import React from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoreBookApplication } from '../../utility/localStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
 


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Chart() {




//   const data = useLoaderData()
// console.log(data)




const books = useLoaderData();

    const [listedBook, setListedBook] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoreBookApplication();
        if (books.length > 0) {


            // const bookListed = books.filter(book => storedBookIds.includes(book.id))

            const bookListed = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    bookListed.push(book)
                }
            }

            setListedBook(bookListed);
            console.log(bookListed, books, storedBookIds)
        }
    }, [])













  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={listedBook}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {listedBook.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}




// import { useLoaderData } from 'react-router-dom';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
 

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

// export default function Chart() {

//   const rawData = useLoaderData();
//   const data = rawData.slice(0, 6); // Take only the first 6 data points
//   console.log(data);

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <BarChart
//         data={data}
//         margin={{
//           top: 20,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="bookName" />
//         <YAxis />
//         <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//           ))}
//         </Bar>
//       </BarChart>
//     </ResponsiveContainer>
//   );
// }
