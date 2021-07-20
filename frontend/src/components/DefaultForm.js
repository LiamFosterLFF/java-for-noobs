import { useForm } from '../utils/useForm';
import { Button } from 'semantic-ui-react';

const FormGroup = ({ props, value, handleChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.title}</label>
            <input
                type={props.type}
                required={props.required}
                placeholder={props.placeholder}
                id={props.name}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

const DefaultForm = ({props}) => {

    const initialValues = props.formGroups.reduce((result, formGroup) => {
        result[formGroup.name] = formGroup.initialValue;
        return result;
    }, {});
    const [ formValues, handleFormChange ] = useForm(initialValues);
    
    return (
        <form onSubmit={props.handler}>
            <h3>{props.title}</h3>
            {props.formGroups.map(propsObj => {
                return <FormGroup props={propsObj} value={formValues[props.name]} handleChange={handleFormChange}/>
            })}
            <Button type="submit">{props.title}</Button>

        </form>
    )
};

export default DefaultForm;