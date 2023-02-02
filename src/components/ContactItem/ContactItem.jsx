// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id))
    }
    return (
        <>
            <p>{name}: {number}</p>
            <button type="button" onClick={handleDelete}>Delete contact</button>
        </>)
}

// ContactItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     deleteContact: PropTypes.func.isRequired
// }

export default ContactItem