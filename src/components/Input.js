import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className=''>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} className="form-control"/>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input
