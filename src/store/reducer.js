import * as actionTypes from './actions/actions';

const initialState={
    newsDetails:{
        
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_ITEMS:
            return{
                ...state,
                newsDetails:{

                }
            };
        case actionTypes.HIDE_NEWS:
            return{
                ...state,
                newsDetails:{

                }
            };  
        case actionTypes.UPVOTE_NEWS:
            return{
                ...state,
                newsDetails:{

                }
            };
        default:
            return state;  
    }
};
export default reducer;