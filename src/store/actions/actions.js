export const ADD_ITEMS='ADD_ITEMS';
export const HIDE_NEWS='HIDE_NEWS';
export const UPVOTE_NEWS='UPVOTE_NEWS';

export const addItems=(res)=>{
    
    return{
        type:ADD_ITEMS,
        redult:res
    }
}