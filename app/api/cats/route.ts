import { NextResponse } from 'next/server'

const API_KEY = process.env.CAT_API_KEY

export async function GET() {
	try {
		if (API_KEY) {
			const url = 'https://api.thecatapi.com/v1/images/search?limit=20'
			const options = {
				headers: {
					'x-api-key': API_KEY,
					'Content-Type': 'application/json',
				},
			}

			const response = await fetch(url, options)
			const data = await response.json()

			return NextResponse.json(data, { status: 200 })
		}
	} catch (error) {
		console.log('CATS_ERROR', error)
		return NextResponse.json('Something went wrong!', { status: 500 })
	}
}
