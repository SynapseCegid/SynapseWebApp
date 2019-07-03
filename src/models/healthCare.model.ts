export class HealthCareModel {
  constructor(
    public title?: string,
    public description?: string,
    public date?: string,
    public type?: string,
    public status?: string,
    public notificationType?: string,
    public graph?: string,
    public archived?: boolean
  ) {
  }
}
