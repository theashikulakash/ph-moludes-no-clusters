import { useEffect, useState } from 'react';
import { getStoredReadList } from '../utils/storage';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const PagesToRead = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(booksData => {
                const readIds = getStoredReadList();
                const readBooks = booksData.filter(book => readIds.includes(book.bookId));
                
                const chartData = readBooks.map(book => ({
                    name: book.bookName,
                    uv: book.totalPages
                }));
                setData(chartData);
            });
    }, []);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#23BE0A', '#59C6D2'];

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

    if (data.length === 0) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h1 className="text-3xl font-bold mb-6">Pages to Read</h1>
                <div className="bg-base-200 rounded-3xl p-20">
                    <p className="text-xl opacity-50">No books in Read list to display in chart.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-10 text-center">Pages to Read</h1>
            <div className="bg-base-200 rounded-3xl p-4 lg:p-20 flex justify-center items-center h-[500px] lg:h-[700px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 60,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="name" 
                            interval={0} 
                            angle={-45} 
                            textAnchor="end" 
                            height={100} 
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PagesToRead;
