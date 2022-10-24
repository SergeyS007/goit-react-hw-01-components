import PropTypes from "prop-types";
import css from 'components/TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
          {items.map(item => (
          <tr key={item.id} className={css.bgColor}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
            </tr>
        ))}
    
  </tbody>
</table>
    )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.node.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.node.isRequired,
      currency: PropTypes.string.isRequired,
    })).isRequired,
}

export default TransactionHistory;