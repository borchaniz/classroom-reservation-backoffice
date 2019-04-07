declare var jQuery: any;

export class Utils {
  static initDataTable(className: string, minimal: boolean = false) {
    setTimeout(function () {
      jQuery('.' + className).DataTable({
        'searching': !minimal,
        'lengthChange': !minimal
      });
    }, 20);
  }
}
