import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ImageType = {
	id: string
	url: string
	width: number
	height: number
}

const initialState = {
	images: [] as ImageType[],
}

const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		// Добавление изображения в избранное
		addToFavorites(state, action: PayloadAction<ImageType>) {
			state.images.push(action.payload)
		},

		// Удаление изображения из избранного
		removeFromFavorites(state, action: PayloadAction<string>) {
			const index = state.images.findIndex(
				(image) => image.id === action.payload
			)

			if (index !== -1) {
				state.images.splice(index, 1)
			}
		},
	},
})

// Экспорт селекторов и экшен-криэйторов
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer
