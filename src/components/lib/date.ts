import moment from 'moment';

const formatDate = (date: number) => moment(date).format('DD MMM YYYY');

export default {formatDate}