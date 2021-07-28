import { useForm } from '../utils/useForm';
import { Button, Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import SocialLogin from './SocialLogin';

const FormGroup = ({ props }) => {
    return (
        <Form.Field>
            <label htmlFor={props.name}>{props.title}</label>
            <input
                type={props.type}
                required={props.required}
                placeholder={props.placeholder}
                id={props.name}
                value={props.value}
                onChange={props.handleChange}
            />
        </Form.Field>
    )
}

const DefaultForm = ({props}) => {

    const dispatch = useDispatch();

    const initialValues = props.formGroups.reduce((result, formGroup) => {
        result[formGroup.name] = formGroup.initialValue;
        return result;
    }, {});
    const [ formValues, handleFormChange, resetForm ] = useForm(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(props.handler(e.target));
        resetForm();
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h3>{props.title}</h3>
                {props.formGroups.map((propsObj, ind) => {
                    return <FormGroup props={propsObj} key={ind} value={formValues[props.name]} handleChange={handleFormChange}/>
                })}
                <Button type="submit">{props.title}</Button>

            </Form>
            <SocialLogin/>
        </div>
    )
};

export default DefaultForm;