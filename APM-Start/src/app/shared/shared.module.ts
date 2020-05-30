import { StarComponent } from './star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StarComponent],
  imports: [CommonModule],
  exports: [StarComponent],
})
export class SharedModule {}
