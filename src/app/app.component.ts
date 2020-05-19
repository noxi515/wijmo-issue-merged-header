import { Component } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import { AllowMerging, Column, FlexGrid, HeadersVisibility, Row } from '@grapecity/wijmo.grid';

type Item = {
  prop0: string,
  prop1: string,
  prop2: string,
  prop3: string,
  prop4: string,
  prop5: string,
  prop6: string,
  prop7: string,
  prop8: string,
};

const WjEnums = {
  AllowMerging,
  HeadersVisibility,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  WjEnums = WjEnums;
  items = new CollectionView<Item>([{}, {}, {}, {}, {}]);

  onGridInitialized(grid: FlexGrid) {
    // Add column header row
    const row1 = new Row();
    row1.allowMerging = true;
    row1.dataItem = {
      prop0: 'prop 0',
      prop1: 'AAA',
      prop2: 'AAA',
      prop3: 'AAA',
      prop4: 'AAA',
      prop5: 'BBB',
      prop6: 'BBB',
      prop7: 'BBB',
      prop8: 'BBB',
    } as Item;
    grid.columnHeaders.rows.splice(0, 0, row1);

    const row2 = new Row();
    row2.allowMerging = true;
    row2.dataItem = {
      prop0: 'prop 0',
      prop1: 'aaa',
      prop2: 'aaa',
      prop3: 'bbb',
      prop4: 'bbb',
      prop5: 'ccc',
      prop6: 'ccc',
      prop7: 'ddd',
      prop8: 'ddd',
    } as Item;
    grid.columnHeaders.rows.splice(1, 0, row2);

    // 行の中からCSSクラスが付いている要素を取得して、最初と最後にCSSクラスを付与する
    grid.updatedView.addHandler((sender, args) => {
      const rows = sender.hostElement.querySelectorAll('.wj-row');
      for (const row of Array.from(rows)) {
        for (const str of ['AAA', 'BBB']) {
          const targetElements = row.querySelectorAll('.' + str);
          if (targetElements.length === 0) {
            continue;
          }

          for (let i = 0; i < targetElements.length; i++) {
            if (i === 0) {
              targetElements[i].classList.add('border-left');
            } else {
              targetElements[i].classList.remove('border-left');
            }

            if (i === targetElements.length - 1) {
              targetElements[i].classList.add('border-right');
            } else {
              targetElements[i].classList.remove('border-right');
            }
          }
        }
      }
    });
  }

  trackByColumn(index: number, column: Column) {
    return column.binding;
  }
}
