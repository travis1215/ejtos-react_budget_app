import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem'; // Add this line
import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        {/* Budget component */}
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        
                        {/* Remaining component */}
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        
                        {/* ExpenseTotal component */}
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    </div>
                </div>

                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    {/* ExpenseList component */}
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>

                <h3 className='mt-3'>Add ExpenseItem</h3>
                <div className='row mt-3'>
                    {/* ExpenseItem component */}
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                </div>

                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    {/* AllocationForm component */}
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
