import uuid from 'uuid'

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      let newOne
      action.quote.id ? newOne = Object.assign({}, action.quote, {votes: 0}) : newOne = Object.assign({}, action.quote, {id: uuid(), votes: 0})
      return [...state, newOne]
      debugger
      break;
    case "REMOVE_QUOTE":
      return state.filter(q => q.id !== action.quoteId)
      break;
    case "UPVOTE_QUOTE":
      let myQuote = state.find(q => q.id === action.quoteId)
      myQuote.votes++
      let otherQuotes = state.filter(q => q.id !== action.quoteId)
      console.log([...otherQuotes, myQuote]);
      return [...otherQuotes, myQuote]
      break;
    case "DOWNVOTE_QUOTE":
      let myQuote2 = state.find(q => q.id === action.quoteId)
      myQuote2.votes > 0 ? myQuote2.votes-- : null
      let otherQuotes2 = state.filter(q => q.id !== action.quoteId)
      console.log([...otherQuotes2, myQuote2]);
      return [...otherQuotes2, myQuote2]
      break;
    default:
      return state;
  }

}
