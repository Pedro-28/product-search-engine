interface SelectProps {
  handleChange: (value: string) => void;
  listOptions: string[];
  // classes?: string
}

export function Select({ handleChange, listOptions }: SelectProps) {
  return (
    <select onChange={({ target }) => handleChange(target.value)}>
      {listOptions.map((option, i) => (
        <option key={`${option}-${i}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
