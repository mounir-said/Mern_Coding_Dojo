import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.payload,
                    error: validate(action.field, action.payload)
                }
            };
        case 'SET_ERROR':
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    error: action.payload
                }
            };
        default:
            return state;
    }
}

function validate(field, value) {
    switch (field) {
        case 'firstName':
        case 'lastName':
            if (!value) {
                return 'This field is required';
            }
            return null;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                return 'This field is required';
            } else if (!emailRegex.test(value)) {
                return 'Invalid email address';
            }
            return null;
        default:
            return null;
    }
}

export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: 'SET_VALUE',
            field: name,
            payload: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const fields = Object.keys(state);
        let hasErrors = false;

        fields.forEach(field => {
            const error = validate(field, state[field].value);
            if (error) {
                hasErrors = true;
                dispatch({
                    type: 'SET_ERROR',
                    field,
                    payload: error
                });
            }
        });

        if (!hasErrors) {
            // Submit form logic here
            alert('Form submitted successfully!');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="form-group">
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                        className={`form-control ${state.firstName.error ? 'is-invalid' : ''}`}
                    />
                </label>
                {state.firstName.error && (
                    <div className="invalid-feedback">{state.firstName.error}</div>
                )}
            </div>
            <div className="form-group">
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                        className={`form-control ${state.lastName.error ? 'is-invalid' : ''}`}
                    />
                </label>
                {state.lastName.error && (
                    <div className="invalid-feedback">{state.lastName.error}</div>
                )}
            </div>
            <div className="form-group">
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                        className={`form-control ${state.email.error ? 'is-invalid' : ''}`}
                    />
                </label>
                {state.email.error && (
                    <div className="invalid-feedback">{state.email.error}</div>
                )}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
