import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.clasTable}>
      <thead>
        <tr className={css.clasTr}>
          <th className={css.columnHeader}>Type</th>
          <th className={css.columnHeader}>Amount</th>
          <th className={css.columnHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tableRow}>
              <td className={css.tableCell}>{type[0].toUpperCase() + type.slice(1)}</td>
              <td className={css.tableCell}>{Number(amount).toFixed(2)}</td>
              <td className={css.tableCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
