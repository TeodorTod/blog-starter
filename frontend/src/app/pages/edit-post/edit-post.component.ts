import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
})

export class EditPostComponent {
  fb = inject(FormBuilder);
  editForm!: FormGroup;
  selectedFile!: File;

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      file: [null]
    });

  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.editForm.patchValue({ file: file.name });
      this.editForm.get('file')?.markAsDirty();
    }
  }

  checkEdit(): void {
    console.log(this.editForm.value);

    this.editForm.reset();
    this.selectedFile = null!;
  }

}
