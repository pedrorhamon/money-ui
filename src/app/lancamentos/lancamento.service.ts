import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  url = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(`${this.url}?resumo`, { headers })
      .toPromise()
      .then((response: any) => response['content']);
  }
}
