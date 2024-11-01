import { useState } from "react"
import { useEffect } from "react"

function useForm ({initalValue, validate}) {
    const [values, setValues] = useState(initalValue)
    const [touched, setTouched] = useState()
    const [errors, setErrors] = useState()

    const handleChangeInput = (name, value) => {
        setValues({
          ...values,
          [name]: value
        });
    }

    const handleBlur = (name) => {
        setTouched({
          ...touched,
          [name]: true
        });
    }

    const getTextInputProps = (name) => {
        const value = values[name];
        const onChange = (event) => handleChangeInput(name, event.target.value);
        const onBlur = () => handleBlur(name);

        return {value, onChange, onBlur}
    }
    
    useEffect (() => {
        const newErrors = validate(values);
        setErrors(newErrors);
    }, [validate, values])

    return {values, touched, errors, getTextInputProps}
}

export default useForm