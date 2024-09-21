import { Injectable } from '@angular/core';

@Injectable()
export class ControlService {
  right = false;
  left = false;
  forward = false;
  backward = false;

  onRightDown() {
    this.right = true;
  }

  onRightUp() {
    this.right = false;
  }

  onLeftDown() {
    this.left = true;
  }

  onLeftUp() {
    this.left = false;
  }

  onForwardDown() {
    this.forward = true;
  }

  onForwardUp() {
    this.forward = false;
  }

  onBackwardDown() {
    this.backward = true;
  }

  onBackwardUp() {
    this.backward = false;
  }
}
