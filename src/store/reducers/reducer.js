const initialState = {
    age: 21,
    history: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "AGE_UP":
            return {
                ...state,
                age: state.age + action.value,
                history: state.history.concat(
                    {
                        id: Math.random(),
                        age: state.age + action.value
                    }),
                loading:false
            }
        case "AGE_DOWN":
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat(
                    {
                        id: Math.random(),
                        age: state.age - action.value
                    })
            }
        case "DELETE_ITEM":
            return {
                ...state,
                history: state.history.filter(element => element.id !== action.key)
            }

        case "LOADING":
            console.log('logo');
            return {
                ...state,
                loading: true
            }
        
        default:
            return state;
    }
}

export default reducer;