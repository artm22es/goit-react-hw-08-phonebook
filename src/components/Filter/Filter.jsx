import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/filterSlice';
import { FilterWrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <input
        type="text"
        name="name"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
        placeholder="Filter by name"
      />
    </FilterWrapper>
  );
};
