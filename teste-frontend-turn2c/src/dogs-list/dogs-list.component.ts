import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'; 

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  dogs: any[] = [];
  breeds!: any[];

  constructor(private http: HttpClient) {}

  
    ngOnInit(): void {
      this.http.get(`${environment.apiUrl}/breeds?limit=10`).subscribe(
        (breedsResponse: any) => {
          this.breeds = breedsResponse as any[];
        },
        (error) => {
          console.error('Erro ao carregar a lista de raças:', error);
        }
      );
    
      this.http.get(`${environment.apiUrl}/images/search?limit=8&has_breeds=1&page=0`).subscribe(
        (dogsResponse: any) => {
          this.dogs = dogsResponse as any[]; 
        },
        (error) => {
          console.error('Erro ao carregar a lista de cachorros:', error);
        }
      );
    }
  }     