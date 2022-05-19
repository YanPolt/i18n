import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";

const Job = ({ offer, unidad }) => {
  if (offer.salary === 1 && unidad === "millones") {
    unidad = "millón";
  }
  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>{offer.salary + " " + unidad}</td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber
          value={offer.views}
          format-style="decimal"
          minimum-integer-digits="4"
        />
      </td>
    </tr>
  );
};

export default Job;
