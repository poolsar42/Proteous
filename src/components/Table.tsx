const Table = ({
  metric,
  entries,
}: {
  metric: boolean;
  entries:
    | string[]
    | {
        sequence: string;
        metric: number;
      }[];
}) => {
  return (
    <div className="border rounded-lg border-black p-2 text-gray-700">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Protein Sequence</th>
            {metric && <th>Metric</th>}
          </tr>
        </thead>
        <tbody className="text-center">
          <td className="text-center">
            {entries.map((entry) => {
              return (
                <tr
                  className={`text-center w-full px-2 ${
                    metric
                      ? ""
                      : "hover:bg-gray-100 hover:text-gray-900 cursor-pointer rounded-lg"
                  }`}
                >
                  {metric ? entry.sequence : entry}
                </tr>
              );
            })}
          </td>
          {metric && (
            <td className="flex flex-col items-center text-center w-full">
              {entries.map((entry) => {
                return <tr className="text-center w-full">{entry.metric}</tr>;
              })}
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
