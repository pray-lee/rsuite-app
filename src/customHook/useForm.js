import React, {useState} from 'react'

export default initialValue => {
    const [form, setForm] = useState(initialValue)
    const setFormValue = formValue => setForm(formValue)
    return [form, setFormValue]
}
