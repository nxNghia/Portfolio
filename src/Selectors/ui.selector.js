import { createSelector } from "reselect";

const getPageIndex = state => state.uiReducer.pageIndex

export const pageIndexSelector = createSelector(
    getPageIndex,
    index => index
)