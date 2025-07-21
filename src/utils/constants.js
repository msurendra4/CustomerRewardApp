export const HEADINGS = {
  customers: 'Rewards Dashboard',
  customerRewards: 'Reward Summary',
  filterByMonthYear: 'Transactions',
};

export const DROPDOWN_OPTIONS = {
  months: [
    'last3',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthLabels: {
    last3: 'Last 3 Months',
  },
  years: ['2024', '2025'],
};

export const MESSAGES = {
  loading: 'Loading transactions...',
  error: 'Error loading data:',
  noTransaction: 'No transaction',
};

export const PAGINATION_TEXT = {
  prev: 'Prev',
  next: 'Next',
};

export const TABLE_HEADERS = {
  dashboard: {
    customerId: 'Customer ID',
    customerName: 'Customer Name',
    viewRewards: 'View Rewards',
  },
  transaction: {
    transactionId: 'Transaction ID',
    amount: 'Amount',
    date: 'Date',
    pointsEarned: 'Points Earned',
  },
  rewards: {
    customerId: 'Customer ID',
    month: 'Month',
    totalSpent: 'Total Spent',
    pointsEarned: 'Points Earned',
  },
};

export const BUTTON_TEXT = {
  back: 'Rewards Dashboard',
  view: 'View',
};

export const TRANSACTION_PER_PAGE = 5;
export const CUSTOMER_PER_PAGE = 5;
