import { Component, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { Address } from '../../product';
import { FirebaseService } from '../../services/firebase.service';
import { SetToArrayPipe } from '../../../../setarraypipe.pipe';

@Component({
  selector: 'app-address-home',
  templateUrl: './address-home.component.html',
  styleUrls: ['./address-home.component.css'],
  providers:  [SetToArrayPipe],
})
export class AddressHomeComponent implements OnInit{
  @Input() task: Address|null=null;
  @Output() edit = new EventEmitter<Address>();
  @ViewChild('addressRadio') addressRadio: MatRadioButton;
  fulladdress: any=null;
  addresses: Address[] = [];
  constructor(private firebaseService: FirebaseService){}
  ngOnInit() {
    this.firebaseService.getCurrentUser().subscribe(user => {
      if (user) {
        
        this.firebaseService.getAddressById(user.userId).subscribe(addresses => {
          this.addresses = addresses;
        });
      }
    });
  }

  selectRadioButton(option: string): void {
    switch (option) {
      case 'addressSelectRadio':
        this.addressRadio.checked = true;
        break;
    }
  }
}