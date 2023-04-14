interface SelectProps {
  handleChange: (value: string) => void;
  listOptions: { id: string, name: string }[];
  selectTitle: string;
  // classes?: string
}

export function Select({ handleChange, listOptions, selectTitle }: SelectProps) {
  return (

    <select defaultValue={selectTitle} onChange={({ target }) => handleChange(target.value)}>
      <option hidden value={selectTitle}>{selectTitle}</option>
      {listOptions.map((option, i) => (
        <option key={`${option}-${i}`} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
