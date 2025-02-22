import useLocalStorage from "./useLocalStorage";

export default function useForm(key, initialValue, cb) {
  const [values, setValue] = useLocalStorage(key, initialValue);

  const clearForm = () => {
    setValue(initialValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    cb();
  };

  const handleChanges = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };
  return [values, clearForm, handleChanges, handleSubmit];
}
