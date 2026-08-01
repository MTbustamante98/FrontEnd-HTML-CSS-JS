interface State {
  firstValue: string | number | null;
  secondValue: string | number | null;
  operator: string | number | null;
  op: string | number | null;
}

export const state: State = {
  firstValue: null,
  secondValue: null,
  operator: null,
  op: null,
};
