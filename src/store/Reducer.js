const initialState = {
    op1: 0,
    op2: 0,
    result: 0
}

const reducer = (state = initialState, action) => {

    const newState = { ...state };

    console.log(action.num1, action.num2, action.type)

    if (action.num1 === "" || action.num2 === "") {
        window.location.reload();
    }

    switch (action.type) {
        case "ADD":
            newState.result = parseInt(action.num1) + parseInt(action.num2)
            break;
        case "SUBTRACT":
            newState.result = parseInt(action.num1) - parseInt(action.num2)
            break;
        case "MULTIPLY":
            newState.result = parseInt(action.num1) * parseInt(action.num2)
            break;
        case "DIVISION":
            newState.result = parseInt(action.num1) / parseInt(action.num2)
            break;
    }
    return newState;

}

export default reducer;