### `useLocalStorage` Hook

**Purpose**:  
This hook provides a way to use local storage for persisting state across browser sessions.

**Parameters**:
- `key` (string): The key under which the data is stored in local storage.
- `initialValue` (any): The initial value to use if there is no data in local storage for the specified key.

**Returns**:
- `storedValue` (any): The current value from local storage.
- `setValue` (function): A function to update the value both in state and in local storage.

**Usage**:
```javascript
const [storedValue, setValue] = useLocalStorage('someKey', initialValue);
```

---

### `useForm` Hook

**Purpose**:  
This hook encapsulates form handling logic including state management, handling submissions, and field changes.

**Parameters**:
- `key` (string): The key under which the form data is stored in local storage via `useLocalStorage`.
- `initialValue` (object): An object representing the initial state of the form.
- `cb` (function): A callback function to be called on form submission.

**Returns**:
- `values` (object): The current state of the form.
- `clearForm` (function): A function to reset the form to its initial state.
- `handleChanges` (function): A function to handle field changes.
- `handleSubmit` (function): A function to handle form submission.

**Usage**:
```javascript
const [values, clearForm, handleChanges, handleSubmit] = useForm('formKey', initialValue, callback);
```
