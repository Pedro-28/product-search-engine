interface SelectProps {
  handleChange: (value: string) => void;
  listOptions: string[];
  selectTitle: string;
  classes?: string
}

export function Select({ handleChange, listOptions, selectTitle, classes }: SelectProps) {
  return (

    <select className={classes} defaultValue={selectTitle} onChange={({ target }) => handleChange(target.value)}>
      <option hidden value={selectTitle}>{selectTitle}</option>
      {listOptions.map((option, i) => (
        <option key={`${option}-${i}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
