import {useForm} from 'react-final-form'
import {Event} from './Cell'

interface RedoButtonProps {
  past: Event[]
  future: Event[]
}
export default function RedoButton({past, future}: RedoButtonProps) {
  const form = useForm()
  return (
    <button
      type="button"
      onClick={() => {
        const event = future.shift()
        if (event) {
          past.push(event)
          form.change(event.field, event.next)
        }
      }}
    >
      Redo
    </button>
  )
}
