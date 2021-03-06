$('#calendar_container').fullCalendar({
  isRTL: true, // http://arshaw.com/fullcalendar/docs/display/isRTL/
  monthNames: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
  monthNamesShort: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
  dayNames: ["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"],
  dayNamesShort: ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],
  buttonText: {
      prev: "&nbsp;&#9668;&nbsp;",
      next: "&nbsp;&#9658;&nbsp;",
      prevYear: "&nbsp;&lt;&lt;&nbsp;",
      nextYear: "&nbsp;&gt;&gt;&nbsp;",
      today: "היום",
      month: "חודש",
      week: "שבוע",
      day: "יום"
  }
});
