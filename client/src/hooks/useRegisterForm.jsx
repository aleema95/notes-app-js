import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function useRegisterForm() {
  const [formHasErrors, setFormHasErrors] = useState(true)
  const form_errors = useSelector((state) => state.errors.form_errors)

  useEffect(() => {
    if ((Object.keys(form_errors).length === 0)) {
      setFormHasErrors(false)
    } else setFormHasErrors(true)
  }, [form_errors])

  return { formHasErrors, form_errors }
}
