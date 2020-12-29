import { useField } from 'formik';

export const Checkbox = () => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label className="checkbox">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}