import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState: initialState,
    reducers: {
        //Actions
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]

        },
        removeFromBasket: (state, action) => {
            console.info(" inside Slice removeFromBasket action dispatched successfully", action)
            const index = state.items
                .findIndex((basketItem) => basketItem.id === action.payload.id);

            console.info("current Basket", state.items)
            console.info("current Basket length", state.items.length)

            console.info("index of element to remove", index)
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
                console.info("News Basket", newBasket)
                console.info("News Basket length", newBasket.length)

            } else {
                console.warn(`product id not in the basket ${action.payload.id}`)
            }


            //  refresh state with new object since the state is immutable to keep track of different states
            state.items = newBasket;
        },
    },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

//reduce to accumulate prices in one value which is the total
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
