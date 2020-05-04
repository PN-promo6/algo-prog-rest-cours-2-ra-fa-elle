import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Dans la méthode fetchUsers, on récup la réponse et on la stocke dans une variable de type Observable<any>.
  // La méthode retourne cette variable de type Observable
  public fetchUsers(): Observable<any> {

    let usersObservable: Observable<any> = this.httpClient.get("http://localhost:3000/users") // Envoie la requête à l'API
    return (usersObservable);
  }

  public fetchUserById(id: string) {
    let idData: Observable<any> =
      this.httpClient.get("http://localhost:3000/users/" + id);
    return idData;
  }

}
