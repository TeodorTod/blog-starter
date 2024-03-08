import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent implements OnInit {
  fb = inject(FormBuilder);
  createForm!: FormGroup;
  selectedFile!: File;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      file: [null]
    });

  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.createForm.patchValue({ file: file.name });
      this.createForm.get('file')?.markAsDirty();
    }
  }


  checkCreate(): void {
    console.log(this.createForm.value);
    this.createForm.reset();
    this.selectedFile = null!;
  }
}
