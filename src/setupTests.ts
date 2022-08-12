// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node'
import { handlers } from './mocks/handlers';
import failOnConsole from 'jest-fail-on-console'

failOnConsole()

// This configures a Service Worker with the given request handlers.
export const server = setupServer(...handlers)
beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen()
})
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close()
})

