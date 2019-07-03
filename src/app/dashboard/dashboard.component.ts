import { SensorModel } from './../../models/sensor.model';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {HealthCareModel} from '../../models/healthCare.model';
import {SensorService} from '../../services/sensor.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Sensors: any;
  closeResult: string;

  requestBinURL: string;
  

  constructor(private httpService: HttpClient, public sensorService: SensorService, private modalService: NgbModal) {
    this.requestBinURL = 'https://enyrcfxpak2k.x.pipedream.net';
  }

  arrSensors: SensorModel [];
  arrHealthCare: HealthCareModel [];
  currentRate = 4;
  ngOnInit() {
    this.httpService.get('https://synapseapi-hackathon.azurewebsites.net/api/followup').subscribe(
      //'../../assets/dataFollowUp.json'
      data => {
        this.arrSensors = data as SensorModel [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    this.httpService.get('https://synapseapi-hackathon.azurewebsites.net/api/preconization').subscribe(
      //'../../assets/dataHealthCare.json'
      data => {
        this.arrHealthCare = data as HealthCareModel [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

    //
    // this.arrSensors.forEach(data => data.exceedance = (data.measuredValue - data.expectedValue) / data.expectedValue);

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arrSensors, event.previousIndex, event.currentIndex);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  archive(sensor: HealthCareModel) {
    sensor.archived = true;

    // TODO add filter on the ngFor to filter achived sensors
  }

  // Sharing methods
  shareWithFacebook() {
    console.log('shareWithFacebook');
  }
  shareWithTwitter() {
    console.log('shareWithTwitter');
  }
  shareWithWhatsapp() {
    console.log('shareWithWhatsapp');
  }
  shareWithSMS() {
    console.log('shareWithSMS');
  }
  shareWithMail() {
    console.log('shareWithMail');
  }
  CallRequestBin(){
    this.httpService.get(this.requestBinURL).subscribe(
      data => {
        const myObjStr = JSON.stringify(data);
        console.log(data);
        console.log(myObjStr);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  onSelectStratus() {
    window.location.href = 'https://auth.cegidlife.com/adfs/ls/?wa=wsignin1.0&wtrealm=https%3a%2f%2fstratus.cegid.com%2f&wctx=rm%3d0%26id%3d69e671b7-9e2b-43d2-9db0-839d6cbd33a0%26ru%3d%252fLogin%252fFederatedLogon&wct=2019-07-02T13%3a13%3a14Z';

  }
  onSelectCegidlife() {
    window.location.href = 'https://auth.cegidlife.com/';

  }
  onSelectChatBot() {
    window.location.href = 'https://www.cegid.com/fr/le-prelevement-a-la-source-en-toute-simplicite/';

  }
  
}
