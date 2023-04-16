const isPromise = (obj) =>
  !!obj
  && (typeof obj ==="object" || typeof obj === "function")
  && typeof obj.then === "function"

const isGenerator = function (obj) {
  return !!obj
  && (typeof obj ==="object" || typeof obj === "function")
  && obj.constructor.name === "GeneratorFunction"
}

const saga = (generator, params) => {
  const g = generator(params)
  const handdle = (yielded) => {
    if (!yielded.done) {
      yielded.value.then(v =>
        handdle(g.next(v))
      )
    }
  }
  
  handdle(g.next())
}

export const middleware = (dispatch) => (action) => {
  if (isPromise(action.payload)) {  // thunk
    action.payload.then(v => {
      dispatch({ ...action, payload: v })
    })
  } else if (isGenerator(action.payload)) {   // saga
    dispatch(action)
    saga(action.payload, dispatch)
  } else {
    dispatch(action)
  }
}
