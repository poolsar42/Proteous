const Table = () => {
  return (
    <div className="border rounded-lg border-black p-2">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Protein Sequence</th>
            <th>Metric</th>
          </tr>
        </thead>
        <tbody>
          <td>
            <tr>FRLERKGDGVLVGMIKDA</tr>
            <tr>GDDPDVTHGAEIQAFVRF</tr>
            <tr>FRLERKGDGVLVGMIKDA</tr>
            <tr>GLGVPVGEPAINPVPRRM</tr>
          </td>
          <td>
            <tr>0.8</tr>
            <tr>0.7</tr>
            <tr>0.3</tr>
            <tr>0.1</tr>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
