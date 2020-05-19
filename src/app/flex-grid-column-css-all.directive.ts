import { Directive, Host, Input, OnDestroy } from '@angular/core';
import { WjFlexGridColumn } from '@grapecity/wijmo.angular2.grid';

@Directive({
  selector: 'wj-flex-grid-column[cssClassAll]'
})
export class AppFlexGridColumnCssAllDirective implements OnDestroy {

  @Input('cssClassAll')
  set value(value: string | null | undefined) {
    this._column.cssClassAll = value || '';
  }

  constructor(@Host() private readonly _column: WjFlexGridColumn) {
  }

  ngOnDestroy() {
    (this._column as any) = null;
  }

}
