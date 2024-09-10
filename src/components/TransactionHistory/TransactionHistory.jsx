import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={s.title}>
    <thead>
      <tr>
        <th className={s.list}>Type</th>
        <th className={s.list}>Amount</th>
        <th className={s.list}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td className={s.item}>{item.type}</td>
          <td className={s.item}>{item.amount}</td>
          <td className={s.item}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default TransactionHistory;
