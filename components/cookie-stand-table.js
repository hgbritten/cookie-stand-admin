import { hours } from "./cookie-stand-data"

export default function CookieStandTable(props) {

  function handleDelete(event, obj) {
    event.preventDefault();
    props.onDelete(obj);
  }

  return (
    <table className="mx-auto border-2 border-green-600 bg-green-300 min-w-full rounded-lg ">
      <thead className="odd:bg-green-200">
        <tr>
          <th className="pl-2 pr-2 border border-green bg-green-500">Location</th>
          {hours.map((item) => <th className="pl-2 pr-2 border border-green bg-green-500 " key={item}>{item}</th>)}
          <th className="pl-2 pr-2 border border-green bg-green-500">Totals</th>
        </tr>
      </thead>
      <tbody>
        {props.stands.map(report => {
          return <ReportRow key={report.id} report={report} handleDelete={handleDelete} />
        })}
      </tbody>

      <FooterRow reports={props.stands} />
    </table>
  )
}

// return (
//   <tr className="odd:bg-green-400">
//     {values.map((value, i) => {
//       if (value === value[0]) {
//         <td className="pl-4 border border-green-900" key={i}>{value}<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//         </svg></td>
//       } else {
//         <td className="pl-4 border border-green-900" key={i}>{value}</td>
//       }

//     }

//     )}
//   </tr>
// );

function ReportRow({ report, obj, handleDelete }) {
  const total = report.cookiesEachHour.reduce((sum, value) => sum + value);
  const values = [...report.cookiesEachHour, total];
  return (
    <tr className="odd:bg-green-400">
      <td className="pl-4 border border-green-900">{report.location} <button onClick={(event) => handleDelete(event, obj)}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//         </svg></button></td>
      {values.map((value, i) =>
        <td className="pl-4 border border-green-900" key={i}>{value}</td>
      )}
    </tr>
  );
}

function FooterRow({ reports }) {
  const cellValues = ["Totals"];
  let megaTotal = 0;
  for (let i in reports[0].cookiesEachHour) {
    let hourlyTotal = 0
    for (let report of reports) {
      hourlyTotal += report.cookiesEachHour[i];
    }
    cellValues.push(hourlyTotal);
    megaTotal += hourlyTotal
  }
  cellValues.push(megaTotal);
  return (
    <tfoot className="bg-green-500">
      <tr>
        {cellValues.map((value, index) => <td className="pl-4 border border-green-900" key={index}>{value}</td>
        )}
      </tr>
    </tfoot>
  )
}