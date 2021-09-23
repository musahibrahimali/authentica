import { FormStyles } from './FormStyles';

// this is a global form component for all forms built with material ui
function Form(props) {
    const styles = FormStyles();
    const { children, ...other } = props;
    return (
        <form className={styles.root} autoComplete="off" {...other}>
            {children}
        </form>
    )
}

export default Form;
