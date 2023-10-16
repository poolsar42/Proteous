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
        <tbody className="text-center">
          <td className="text-center">
            <tr className="text-center">FRLERKGDGVLVGMIKDA</tr>
            <tr className="text-center">GDDPDVTHGAEIQAFVRF</tr>
            <tr className="text-center">FRLERKGDGVLVGMIKDA</tr>
            <tr className="text-center">GLGVPVGEPAINPVPRRM</tr>
          </td>
          <td className="text-center">
            <tr className="text-center">0.8</tr>
            <tr className="text-center">0.7</tr>
            <tr className="text-center">0.3</tr>
            <tr className="text-center">0.1</tr>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
