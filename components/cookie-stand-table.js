import { hours } from "./cookie-stand-data"

export default function CookieStandTable(props) {
  return (
    <table className="mx-auto border-2 border-green-600 min-w-full ">
      <thead className="odd:bg-green-200">
        <tr>
          <th className="pl-2 pr-2 border border-green bg-green-500">Location</th>
          {hours.map((item) => <th className="pl-2 pr-2 border border-green bg-green-500 " key={item}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.stands.map((cstand) => (
          <tr className="pl-2 pr-2 border border-green bg-green-500 odd:bg-green-200" key={cstand.id}>
            <td>{cstand.location} </td>
            {console.log(cstand)}
            {cstand.cookiesEachHour.map((hour, i) => <td className="pl-2 pr-2 border border-green bg-green-500 odd:bg-green-200" key={i}>{hour}</td>)}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th className="pl-2 pr-2 border border-green bg-green-500">Total</th>
          {hours.map((item) => <th className="pl-2 pr-2 border border-green bg-green-500" key={item}>{item}</th>)}
        </tr>
      </tfoot>
    </table>
  )
}