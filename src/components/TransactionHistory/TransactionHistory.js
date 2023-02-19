import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableItem,
  Type,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TableItem key={item.id}>
            <Type>{item.type}</Type>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TableItem>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
