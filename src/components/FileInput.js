import React from "react";
import { Field } from "redux-form";

const adaptFileEventToValue = (delegate) => (e) => delegate(e.target.files[0]);

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      multiple={true}
      name="files"
      type="file"
      id="files"
      {...props.input}
      {...props}
    />
  );
};

export const FileUpload = () => {
  return <Field name="attachment" component={FileInput} type="file" />;
};
