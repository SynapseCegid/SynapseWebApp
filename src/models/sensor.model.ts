export class SensorModel {
  constructor(
    public title?: string,
    public description?: string,
    public expectedValue?: number,
    public measuredValue?: number,
    public follow?: boolean,
    public exceedance?: number,
    public graph?: string
  ) {
  }
}
