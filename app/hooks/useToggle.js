import {useState} from 'react';

export function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(_value) {
    setValue(currentValue =>
      typeof _value === 'boolean' ? _value : !currentValue,
    );
  }

  return [value, toggleValue];
}
