import * as React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { Input, Row, Col, Popover, Button, Calendar } from 'antd';
import Foco from 'react-foco';
import dayjs, { Dayjs } from 'dayjs';

const CalendarPopover = (props: {
  selectedCalendarDate: Dayjs;
  onDateChange: (date: any) => void;
}) => {
  const [calendarOpen, setCalendarOpen] = React.useState(false);

  const onCalendarChange = (date: Dayjs) => {
    props.onDateChange(date);
    setCalendarOpen(false);
  };

  return (
    <Popover
      title={null}
      open={calendarOpen}
      content={
        <Foco onClickOutside={(s: any) => setCalendarOpen(false)}>
          <Calendar
            fullscreen={false}
            onChange={onCalendarChange}
            value={props.selectedCalendarDate}
          />
        </Foco>
      }
      overlayStyle={{ width: 325 }}
      trigger="click"
    >
      <AiTwotoneCalendar
        onClick={() => setCalendarOpen(true)}
        style={{ fontSize: 'larger', cursor: 'pointer' }}
      >
        Click me
      </AiTwotoneCalendar>
    </Popover>
  );
};

const DateInput = (props: any) => {
  const [dateVal, setDateVal] = React.useState<string>(
    dayjs().format('MM/DD/YYYY')
  );

  const onDateChange = (date: Dayjs) => {
    setDateVal(date.format('MM/DD/YYYY'));
  };

  const CalendarPopoverMemo = React.memo(CalendarPopover);
  const InputPopoverMemo = React.memo(Input);

  return (
    <Row>
      <Col span={12}>
        Date:
        <Input
          size="small"
          onChange={(e: any) => setDateVal(e.target.value)}
          addonAfter={
            <CalendarPopover
              onDateChange={onDateChange}
              selectedCalendarDate={dayjs(dateVal)}
            />
          }
          value={dateVal}
        />
      </Col>
    </Row>
  );
};
export default DateInput;
