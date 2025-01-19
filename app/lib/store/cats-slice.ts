import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type ImageType = {
	id: string
	url: string
	width: number
	height: number
}

type State = {
	images: ImageType[]
	loading: boolean
	error: string | null
}

const initialState: State = {
	images: [] as ImageType[],
	loading: false,
	error: null,
}

// Асинхронная операция для получения данных
export const fetchCats = createAsyncThunk('cats/fetch', async () => {
	try {
		const response = await fetch('/api/cats')
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Ошибка при получении данных:', error)
		throw error
	}
})

const catsSlice = createSlice({
	name: 'cats',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCats.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchCats.fulfilled, (state, action) => {
				state.loading = false
				state.images = [...state.images, ...action.payload]
			})
			.addCase(fetchCats.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Что-то пошло не так!'
			})
	},
})

export default catsSlice.reducer
