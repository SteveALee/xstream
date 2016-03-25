import {Producer} from '../Producer';
import {Listener} from '../Listener';
import {noop} from '../utils/noop';

export class FromProducer<T> implements Producer<T> {
  constructor(public a: Array<T>) {
  }

  start(out: Listener<T>): void {
    const a = this.a;
    for (let i = 0, l = a.length; i < l; i++) {
      out.next(a[i]);
    }
    out.end();
  }

  stop(): void {
    noop();
  }
}
