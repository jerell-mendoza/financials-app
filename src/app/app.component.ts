import { Component, ViewEncapsulation } from '@angular/core';
import { Operation } from './common/operation.model';
import { State, Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `{{ operations | json }}`
})
export class AppComponent {
  public operations: Array<Operation>;

  constructor(private _store: Store<State<any>>) {
    _store.select('operations').subscribe((state: Array<Operation>) => {
      this.operations = state;
    });
  }
}
