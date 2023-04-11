interface SelectProps {
  handleChange: () => void;
  listOptions: string[];
  // classes?: string
}

export function Select({ handleChange, listOptions}: SelectProps) {
  return (
    <select onChange={handleChange}>
      {listOptions.map((option, i) => (
        <option key={`${option}-${i}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
