const Table = ({
  metric,
  entries,
  onClick,
}: {
  metric: boolean;
  entries:
    | {
        sequence: string;
        metric?: number;
        id?: number;
      }[];
  onClick?: (id: number) => void;
}) => {
  return (
    <div className="w-full border  border-gray-300 p-2 text-gray-700">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Protein Sequence</th>
            {metric ? <th>Metric</th> : null}
          </tr>
        </thead>
        <tbody className="text-center w-full">
          <td className="text-center w-full">
            {entries.map((entry) => {
              return (
                <tr
                  className={`text-center w-full px-2 hover:bg-gray-100 hover:text-gray-900 cursor-pointer rounded-lg`}
                  onClick={(id) => onClick(entry.id)}
                >
                  {entry.sequence}
                </tr>
              );
            })}
          </td>
          {metric ? (
            <td className="flex flex-col items-center text-center w-full border border-gray-300">
              {entries.map((entry) => {
                return (
                  <tr className="text-center w-full">
                    {entry.metric.toString().slice(0, 12)}
                  </tr>
                );
              })}
            </td>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
