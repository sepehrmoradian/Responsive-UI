import textBoxStyle from "./styles/textBox.module.css";
import TextField from "@mui/material/TextField";

type TextBoxProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: "text" | "password";
};

const Textbox = (props: TextBoxProps) => {
  const { label, value, onChange, error, type = "text" } = props; // Default type to "text"
  const isAgeField = label.toLowerCase() === "age";

  return (
    <div className={textBoxStyle.main}>
      {isAgeField ? (
        <TextField
          fullWidth
          label={label}
          variant="outlined"
          value={value}
          type="number"
          margin="normal"
          size="small"
          onChange={(e) => onChange(e.target.value)}
          error={!!error} // Set error state based on whether the error prop is present
          helperText={error} // Display the error message
          className={textBoxStyle.inputBox}
        />
      ) : (
        <TextField
          fullWidth
          label={label}
          variant="outlined"
          value={value}
          type={type} // Use the specified type for the input field
          margin="normal"
          size="small"
          onChange={(e) => onChange(e.target.value)}
          error={!!error} // Set error state based on whether the error prop is present
          helperText={error} // Display the error message
          className={textBoxStyle.inputBox}
        />
      )}
    </div>
  );
};

export default Textbox;
