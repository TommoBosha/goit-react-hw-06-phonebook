import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContact, filterContacts } from '../../redux/contacts/contactsSlice';


export const Filter = () => {
    const filter = useSelector(getFilterContact);
    const dispatch = useDispatch();

    const onChangeFilter = (query) => { 
        dispatch(filterContacts(query));
    }
    return (
        <Label>
            Find contacts by name
            <Input 
                type="text"
                name="filter"
                value={filter}
                onChange={(e) => onChangeFilter(e.target.value)}
                placeholder="Enter search name" />
        </Label>
    );
}
