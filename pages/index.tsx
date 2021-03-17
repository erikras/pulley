import {Form, Field} from 'react-final-form'
import {FieldArray} from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'

import styled from 'styled-components'
import {useRef} from 'react'
import Cell from '../components/Cell'
import UndoButton from '../components/UndoButton'
import RedoButton from '../components/RedoButton'
const initialValues = {
  values: Array.from({length: 5}).fill(Array.from({length: 10}).fill('')),
}

const Home = () => {
  const past = useRef([])
  const future = useRef([])

  return (
    <Container>
      <h1>Hello, Pulley. 👋</h1>
      <Form
        initialValues={initialValues}
        mutators={{
          // potentially other mutators could be merged here
          ...arrayMutators,
        }}
        onSubmit={(values) => window.alert(values)}
        subscription={{}}
      >
        {({handleSubmit}) => (
          <>
            <UndoButton past={past.current} future={future.current} />
            <RedoButton past={past.current} future={future.current} />
            <form onSubmit={handleSubmit}>
              <FieldArray name="values" subscription={{}}>
                {({fields: rows}) => (
                  <div>
                    {rows.map((row) => (
                      <FieldArray name={row} subscription={{}}>
                        {({fields}) => (
                          <div>
                            {fields.map((field) => (
                              <Cell
                                name={field}
                                onChange={(event) => {
                                  past.current.push(event)
                                  future.current = []
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </FieldArray>
                    ))}
                  </div>
                )}
              </FieldArray>
            </form>
          </>
        )}
      </Form>
    </Container>
  )
}

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 2px 5px;
`

const Container = styled.div`
  margin: 1em auto;
  max-width: 900px;
`

export default Home
