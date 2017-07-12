import { stream, on } from 'flyd'

export default function value (init) {
  const result = stream(init())
  on(result, init)
  return result
}
