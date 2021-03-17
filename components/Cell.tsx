import {useState} from 'react'
import {useField} from 'react-final-form'

export interface Event {
  field: string
  previous: string
  next: string
}

interface CellProps {
  name: string
  onChange: (event: Event) => void
}

export default function Cell({name, onChange}: CellProps) {
  const [previous, setPrevious] = useState('')

  const {input} = useField(name, {subscription: {value: true}})
  return (
    <input
      {...input}
      onFocus={(event) => {
        setPrevious(input.value)
        input.onFocus(event)
      }}
      onBlur={(event) => {
        input.onBlur(event)
        onChange({field: name, previous, next: input.value})
      }}
    />
  )
}
