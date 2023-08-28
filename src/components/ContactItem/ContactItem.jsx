import { ContactItemStyle } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { Btn } from './ContactList.styled';

export const ContactItem = ({ name, number, id, onDelete }) => {
return (<ContactItemStyle key={id}>
        <span>{name}:</span>
        <span>{number}</span>
        <Btn type="button" onClick={() => onDelete(id)}>
            Delete
        </Btn>
    </ContactItemStyle>);
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};