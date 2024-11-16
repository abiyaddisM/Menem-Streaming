export class DateConverter {
  public static dateConverter1(data: any): string {
    // Convert input to Date object if it's a valid date string or timestamp
    const date = new Date(data);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid Date'; // Handle invalid date
    }

    // Format the date
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }
}
