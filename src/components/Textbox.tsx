import textBoxStyle from "./styles/textBox.module.css";
import TextField from "@mui/material/TextField";

type TextBoxProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const Textbox = (props: TextBoxProps) => {
  const { label, value, onChange } = props;
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
          className={textBoxStyle.inputBox}
        />
      ) : (
        <TextField
          fullWidth
          label={label}
          variant="outlined"
          value={value}
          margin="normal"
          size="small"
          onChange={(e) => onChange(e.target.value)}
          className={textBoxStyle.inputBox}
        />
      )}
    </div>
  );
};

export default Textbox;
