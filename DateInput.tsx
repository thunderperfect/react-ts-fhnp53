import * as React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { Input, Row, Col, Popover, Button, Calendar } from 'antd';
import Foco from 'react-foco';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

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
        color="gray"
        onClick={() => setCalendarOpen(true)}
        style={{ fontSize: 'larger', cursor: 'pointer' }}
      >
        Click me
      </AiTwotoneCalendar>
    </Popover>
  );
};

const DateInput = (props: any) => {
  const globalDateFormat: string = 'MM/DD/YYYY';
  type states = 'error' | 'warning' | '';

  const [isValid, setIsValid] = React.useState<states>('');

  const [dateVal, setDateVal] = React.useState<string>(
    dayjs().format(globalDateFormat)
  );

  const onDateChange = (date: Dayjs) => {
    setDateVal(date.format(globalDateFormat));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDateVal(newValue);

    setIsValid(
      dayjs(newValue, globalDateFormat, true).isValid() ? '' : 'error'
    );
  };

  const CalendarPopoverMemo = React.memo(CalendarPopover);
  const InputPopoverMemo = React.memo(Input);

  return (
    <Row>
      <Col span={12}>
        Date:
        <Input
          status={isValid}
          maxLength={10}
          size="small"
          onChange={onInputChange}
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
