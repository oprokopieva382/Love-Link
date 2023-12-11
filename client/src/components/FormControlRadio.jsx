import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const FormControlRadio = ({ title, value, onChange, name }) => {

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name={name}
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="female"  control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel
          value="nonbinary"
          control={<Radio />}
          label="Nonbinary"
        />
      </RadioGroup>
    </FormControl>
  );
};
