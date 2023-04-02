import * as React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { Input, Row, Col, Popover, Button, Calendar } from 'antd';
import Foco from 'react-foco';
import dayjs, {Dayjs} from 'dayjs';

const CalendarPopover = (props: { onDateChange: (date: any) => void }) => {
  const [calendarOpen, setCalendarOpen] = React.useState(false);

  const onCalendarChange = (date: Dayjs) => {
    props.onDateChange(date)
    setCalendarOpen(false);
  };

  return (
    <Popover
      open={calendarOpen}
      content={
        <Foco onClickOutside={(s:any) => setCalendarOpen(false)}>
          <Calendar fullscreen={false}  onChange={onCalendarChange} />
        </Foco>
      }
      title="Title"
      overlayStyle={{ width: 325 }}
      trigger="click"
    >
      <AiTwotoneCalendar onClick={() => setCalendarOpen(true)}>
        Click me
      </AiTwotoneCalendar>
    </Popover>
  );
};

const DateInput = (props: any) => {
  const [dateVal, setDateVal] = React.useState(dayjs());

  return (
    <div>
      <Row>
        <Col span={12}>
          Date:
          <Input
            addonAfter={
              <CalendarPopover onDateChange={(date: Dayjs) => console.log(date.format('MM/DD/YYYY'))} />
            }
            value={dateVal}
          />
        </Col>
      </Row>
    </div>
  );
};
export default DateInput;
