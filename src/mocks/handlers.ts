import { rest } from 'msw'
import mockSearch from './search.json';

export const handlers = [
  rest.post('https://swapi.dev/api/people', (req, res, ctx) => {
    const search = req.url.searchParams.get('search')
    if (search) {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json(mockSearch)
      )
    }
  }),
]
