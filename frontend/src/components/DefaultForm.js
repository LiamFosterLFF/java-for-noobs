import { useForm } from '../utils/useForm';
import { Button, Form } from 'semantic-ui-react';

const FormGroup = ({ props, value, handleChange }) => {
    return (
        <Form.Field>
            <label htmlFor={props.name}>{props.title}</label>
            <input
                type={props.type}
                required={props.required}
                placeholder={props.placeholder}
                id={props.name}
                value={value}
                onChange={handleChange}
            />
        </Form.Field>
    )
}

const DefaultForm = ({props}) => {

    const initialValues = props.formGroups.reduce((result, formGroup) => {
        result[formGroup.name] = formGroup.initialValue;
        return result;
    }, {});
    const [ formValues, handleFormChange, resetForm ] = useForm(initialValues);

    const handleSubmit = (e) => {
        props.handler(e);
        resetForm();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h3>{props.title}</h3>
            {props.formGroups.map(propsObj => {
                return <FormGroup props={propsObj} value={formValues[props.name]} handleChange={handleFormChange}/>
            })}
            <Button type="submit">{props.title}</Button>

        </Form>
    )
};

export default DefaultForm;