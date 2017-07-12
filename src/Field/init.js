import { stream } from 'flyd'

export default function init (importer, value) {
  return stream(importer(value))
}
