import {useForm} from 'react-final-form'
import {Event} from './Cell'

interface UndoButtonProps {
  past: Event[]
  future: Event[]
}
export default function UndoButton({past, future}: UndoButtonProps) {
  const form = useForm()
  console.info({past, future})
  return (
    <button
      type="button"
      onClick={() => {
        const event = past.pop()
        if (event) {
          future.unshift(event)
          form.change(event.field, event.previous)
        }
      }}
    >
      Undo
    </button>
  )
}
