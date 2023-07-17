import { format, isToday } from "date-fns";
import styled from "styled-components";

import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

import { HiEye, HiPencil } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Menus from "../../ui/Menus";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Menus.Toggle id={bookingId} />
      <Menus.List id={bookingId}>
        <Menus.Button
          icon={<HiEye />}
          onClick={() => navigate(`/booking/${bookingId}`)}
        >
          Open
        </Menus.Button>
        <Menus.Button
          icon={<HiPencil />}
          onClick={() => alert(`/booking/${bookingId}`)}
        >
          Edit
        </Menus.Button>
      </Menus.List>
    </Table.Row>
  );
}

export default BookingRow;
