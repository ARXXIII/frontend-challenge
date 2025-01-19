import { configureStore } from '@reduxjs/toolkit'

import catsSlice from './cats-slice'
import favoriteSlice from './favorite-slice'

export const store = configureStore({
	reducer: {
		cats: catsSlice,
		favorites: favoriteSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
