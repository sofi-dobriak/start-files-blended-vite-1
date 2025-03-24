import { formatDistanceToNow } from 'date-fns';

const formatTimeToNow = postedAt => {
  return formatDistanceToNow(postedAt, { addSuffix: true });
};

export default formatTimeToNow;
