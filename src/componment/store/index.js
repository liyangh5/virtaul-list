const initState = {
  fun: undefined,
   
}

const reducer = (initState, action) => {
  switch(action.type) {
    case 'getApi':
      console.log('reducer');
      return { ...initState, fun: action.payload };
    default:
      return { ...initState };
  }
}

export {
  initState,
  reducer
}