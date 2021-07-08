import { hours } from "./data"

export default function ReportTable(props) {

  return (
    <table className="flex justify-center">
      <thead>
        <tr>
          <th className="pl-2 pr-2 border border-green bg-green-500">Location</th>
          {hours.map((item) => <th className="pl-2 pr-2 border border-green bg-green-500" key={item}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.cookieStands.map((cstand) => (
          <tr className="pl-2 pr-2 border border-green bg-green-500" key={cstand.location}>
            <td>{cstand.location}</td>
            {cstand.hours.map((hour) => <td className="pl-2 pr-2 border border-green bg-green-500">{hour}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}