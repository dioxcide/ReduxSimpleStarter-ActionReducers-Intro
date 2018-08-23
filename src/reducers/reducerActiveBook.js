//State argument is not app state, only state that the reducer
//is changing
export default function(state = null, action){
    switch(action.type){
        
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}