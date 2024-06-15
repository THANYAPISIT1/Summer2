import axios from 'axios';
import Sidebar from '../../Components/Layouts/Sidebar';
import TopNav from '../../Components/Layouts/TopNav';
import { Pagination } from "@nextui-org/react";

const Transection = () => {
    // Dummy data for demonstration
    const transactions = [
        { BName: 'Broadcast 1', BReceive: 'User 1', BUpdate: '01/01/2024', TName: 'Transaction 1', ProcessedAt: '01/01/2024 10:00' },
        { BName: 'Broadcast 2', BReceive: 'User 2', BUpdate: '02/01/2024', TName: 'Transaction 2', ProcessedAt: '02/01/2024 11:00' },
        // Add more rows as needed
    ];

    return (
        <div className='relative'>
            <TopNav />
            <Sidebar />  
            <div className='mt-16'>
                <section className="ml-64">
                    <header className='static'>
                        <div className="text-xl p-8 font-bold">Transection</div>
                    </header>
                    <hr />
                    <div className='p-8'>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-700">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                                    <tr >
                                        <th className="px-6 py-3">BName</th>
                                        <th className="px-6 py-3">BReceive</th>
                                        <th className="px-6 py-3">BUpdate</th>
                                        <th className="px-6 py-3">TName</th>
                                        <th className="px-6 py-3 text-right">Processed At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-200 dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-300">
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">{transaction.BName}</td>
                                            <td className="px-6 py-4">{transaction.BReceive}</td>
                                            <td className="px-6 py-4">{transaction.BUpdate}</td>
                                            <td className="px-6 py-4">{transaction.TName}</td>
                                            <td className="px-6 py-4 text-right">{transaction.ProcessedAt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </section>
                <footer className='ml-64 flex justify-center mt-8 my-8'>
                    <Pagination
                        isCompact 
                        showControls 
                        className=''
                    />
                </footer>
            </div>
        </div>
    );
};

export default Transection;
