import {Injectable} from '@angular/core';
import {SensorModel} from '../models/sensor.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HealthCareModel} from '../models/healthCare.model';


@Injectable({
  providedIn: 'root'
})

export class SensorService {

  arrSensors: SensorModel [];
  arrHealthCare: HealthCareModel [];

  constructor(private httpService: HttpClient) {
    //
    // this.httpService.get('../../assets/dataHealthCare.json').subscribe(
    //   data => {
    //     this.arrHealthCare = data as HealthCareModel [];	 // FILL THE ARRAY WITH DATA.
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err.message);
    //   }
    // );
  }


  parseDataFollowUp() {
    this.httpService.get('../assets/dataFollowUp.json').subscribe(
      data => {
        this.arrSensors = data as SensorModel [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    return this.arrSensors;
  }
}
