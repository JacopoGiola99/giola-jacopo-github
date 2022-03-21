import { DateTime } from 'luxon';

export const formatDate = (date) => {
    if(!date) throw new Error('Date is null or undefined');
    const formattedDate = DateTime.fromISO(date);

    if(formattedDate.toString() === 'Invalid DateTime') throw new Error('Invalid date');

    return formattedDate.toLocaleString(DateTime.DATETIME_MED);
}