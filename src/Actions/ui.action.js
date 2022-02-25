import { constances as ACTIONS } from "../Constances";

export const updatePageIndex = (index) => {
    return {
        type: ACTIONS.UI_PAGE_INDEX_UPDATE,
        index
    }
}