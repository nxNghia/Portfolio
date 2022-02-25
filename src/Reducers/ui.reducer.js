import { constances as ACTIONS } from "../Constances";

const initialState = {
    pageIndex: 0
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ACTIONS.UI_PAGE_INDEX_UPDATE:
            return {
                ...state,
                pageIndex: action.index
            }

        default: return state
    }
}