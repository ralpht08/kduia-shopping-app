import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    //let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            return {
                ...state,
                expenses: state.expenses.map(expense => {
                    if (expense.name === action.payload.name) {
                        const newUnitPrice = expense.unitprice + action.payload.unitprice;
                        const newTotalValue = newUnitPrice;

                        if (newTotalValue <= state.budget - state.CartValue) {
                            return {
                                ...expense,
                                unitprice: newUnitPrice,
                            };
                        } else {
                            alert("The value cannot exceed the remaining funds!");
                            return expense;
                        }
                    }
                    return expense;
                }),
                CartValue: state.CartValue + action.payload.unitprice * state.expenses.find(expense => expense.name === action.payload.name).quantity,
            };

        case 'RED_QUANTITY':
            return {
                ...state,
                expenses: state.expenses.map(expense => {
                    if (expense.name === action.payload.name) {
                        const newUnitPrice = Math.max(expense.unitprice - action.payload.unitprice, 0);
                        //const newTotalValue = newUnitPrice;

                        return {
                            ...expense,
                            unitprice: newUnitPrice,
                        };
                    }
                    return expense;
                }),
                CartValue: state.CartValue - action.payload.unitprice * state.expenses.find(expense => expense.name === action.payload.name).quantity,
            };;

    case 'CHG_LOCATION':
            action.type = "DONE";
            state.Location = action.payload;
            return {
                ...state
            }
            
    case 'UPDATE_UNIT_PRICE':
        const updatedExpenses = state.expenses.map((expense) => {
            if (expense.name === action.payload.name) {
                return {
                    ...expense,
                    unitprice: action.payload.unitprice,
                };
            }
            return expense;
        });

        return {
            ...state,
            expenses: updatedExpenses,
        };

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    expenses: [
        { id: "Marketing", name: 'Marketing', unitprice: 50 },
        { id: "Finance", name: 'Finance', unitprice: 300 },
        { id: "Sales", name: 'Sales', unitprice: 70 },
        { id: "Human Resource", name: 'Human Resource',unitprice: 40 },
        { id: "IT", name: 'IT',unitprice: 500 },
    ],
    Location: '$',
    budget: 2000,
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + (item.unitprice));
    }, 0);
state.CartValue = totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: state.CartValue,
                dispatch,
                Location: state.Location,
                budget: state.budget
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};