import { FormProvider } from "react-hook-form"
import PropTypes from 'prop-types'

export const Form = ({
    methods,
    onSubmit,
    children,
}) => {
  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.propTypes = {
    methods: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

