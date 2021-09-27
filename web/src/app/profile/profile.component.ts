import { Component, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IModalDialog, IModalDialogButton, IModalDialogOptions, ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, IModalDialog {

  actionButtons: IModalDialogButton[];
  showSpinner = false;
  isLoggedIn = false;
  isEdit = false;
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })
  constructor(private router: Router, private modalService: ModalDialogService, private viewRef: ViewContainerRef) {
    this.actionButtons = [
      { text: 'Cancel' }, // no special processing here
      {
        text: 'Delete', onAction: () => {
          this.isEdit = true
          return true
        }
      },
      // { text: 'I never close', onAction: () => false }
    ];
  }

  get name() {
    return this.profileForm.get('name')
  }

  get email() {
    return this.profileForm.get('email')
  }

  get phone() {
    return this.profileForm.get('phone')
  }

  get address() {
    return this.profileForm.get('address')
  }


  ngOnInit() {
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }

  editHandler() {
    this.isEdit = true
  }

  deleteHandler() {
    this.modalService.openDialog(this.viewRef, {
      title: 'Some modal title',
      actionButtons: this.actionButtons,
      data: { message: "Are you sure?" },
      placeOnTop: true,
      childComponent: SimpleModalComponent
    });
  }

  saveHandler() {

  }

  cancelHandler() {
    this.isEdit = false
  }

  goToLogin() {
    this.router.navigateByUrl('/signin')
  }

}
