import React, { createContext, useContext, useReducer } from "react";

export const DatatLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
	<DatatLayerContext.Provider value={useReducer(reducer, initialState)}>
		{ children }
	</DatatLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DatatLayerContext);