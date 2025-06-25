export default function UrlTable({ links }) {
  if (!links.length) return null;
  return (
    <table className="w-full mt-6 text-left border-t">
      <thead>
        <tr>
          <th className="py-2">Short URL</th>
          <th className="py-2">Copy</th>
        </tr>
      </thead>
      <tbody>
        {links.map((url) => (
          <tr key={url} className="border-t">
            <td className="py-2 text-blue-600">
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </td>
            <td>
              <button
                onClick={() => navigator.clipboard.writeText(url)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                Copy
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}