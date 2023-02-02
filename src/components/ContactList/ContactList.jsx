import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import ContactItem from '../ContactItem/ContactItem'
import { List, Item } from './ContactList.styled'

export const ContactList = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)
    
    const getVisibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
        
    return (<List>
        {getVisibleContacts().map(({ id, name, number }) =>
            <Item key={id}>
                <ContactItem name={name}
                    number={number}
                    id={id} />
            </Item>)}
    </List>)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
}

export default ContactList