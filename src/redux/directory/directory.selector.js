import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const directorySelector = createSelector(
    [selectDirectory],
    directory => directory.sections
);