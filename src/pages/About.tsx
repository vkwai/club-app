import { FC, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { StaffType } from "../Types";
import StaffData from "../data/staff.json";

export const About: FC<{}> = (props) => {
  //   console.log(StaffData["staff"]);
  const [staff, setStaff] = useState<StaffType[]>(StaffData["staff"]);
  const [year, setYear] = useState<number>(new Date().getFullYear());

  let availableYears = staff.map((x) => {
    return x.year;
  });
  let uniqueYears = availableYears.filter((v, i, a) => a.indexOf(v) === i); //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  uniqueYears.sort();
  uniqueYears.reverse();

  let filteredStaff = staff.filter((x) => x.year === year);
  let sortOrder = ["President", "Vice President", "else"];
  filteredStaff.sort(function (a, b) {
    if (sortOrder.includes(a.title)) {
      return sortOrder.indexOf(a.title) - sortOrder.indexOf(b.title);
    } else {
      return 1;
    }
  });
  //   console.log(filteredStaff);

  const handleChange = (event: SelectChangeEvent) => {
    setYear(parseInt(event.target.value));
  };
  return (
    <div>
      put article data here (will push footer down)
      <br />
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" color="secondary">
          Year
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={`${year}`}
          label="Year"
          onChange={handleChange}
        >
          {uniqueYears.map((y) => (
            <MenuItem key={y} value={y}>
              {y}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ul>
        {filteredStaff.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};
