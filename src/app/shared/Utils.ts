declare var jQuery: any;

export class Utils {
  static initDataTable(className: string, minimal: boolean = false) {
    setTimeout(function () {
      jQuery('.' + className).DataTable({
        'searching': !minimal,
        'lengthChange': !minimal
      });
    }, 50);
  }

  static displayDate(date: Date) {
    let res = '';
    if (date.getDate()<10) res+='0';
    res += date.getDate() + '/';
    if (date.getMonth()+1<10) res+="0";
    res+= (date.getMonth()+1) + '/' + date.getFullYear() + ' ';
    if (date.getHours()<10) res += '0';
    res+=date.getHours()+':';
    if (date.getMinutes()<10) res += '0';
    res+=date.getMinutes();
    return res;
  }
}
