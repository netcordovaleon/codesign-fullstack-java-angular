import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class AppError {
  public status = 0;
  constructor(originalError?: any, public message?: any) { }
}

export class InternalServerError extends AppError {
  constructor(public originalError?: any) {
    super(originalError);
    this.status = 500;
  }
}

export class OptionsRequest {
  headers?: HttpHeaders | {
    [header: string]: string | Array<string>;
  };
  observe?: 'body';
  params?: {};
  responseType?: 'json';
  preloader?: boolean;
  withCredentials?: boolean;
  retry?: number;
  reportProgress?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getBlob(path: string, options?: any): Observable<any> {
    options = options || {};
    const request = this.getUrlAndParameters(path, options);
    const pipes = this.getPipesDefault(options);
    const observable = this.http.get(request.url, {
        headers : request.options.headers,
        responseType : 'blob'
    });
    return this.formatObservablePipe(observable, pipes);
  }

  get<T>(path: string, options?: OptionsRequest): Observable<any> {
    options = options || {};
    const request = this.getUrlAndParameters(path, options);
    const pipes = this.getPipesDefault(options);
    const observable = this.http.get<T>(request.url, request.options);

    return this.formatObservablePipe(observable, pipes);
  }

  post<T>(path: string, body = {}, options?: OptionsRequest): Observable<any> {
    options = options || {};
    const request = this.getUrlAndParameters(path, options);
    const pipes = this.getPipesDefault(options);
    const observable = this.http.post<T>(request.url, body, request.options);
    return this.formatObservablePipe(observable, pipes);
  }

  postProgress<T>(path: string, body = {}, options?: OptionsRequest): Observable<any> {
    options = options || {};
    const request = this.getUrlAndParameters(path, options);
    const pipes = this.getPipesDefault(options);
    const req = new HttpRequest('POST', request.url, body, options as any);
    const observable = this.http.request<T>(req);
    return this.formatObservablePipe(observable, pipes) as any;
  }

  put<T>(path: string, body = {}, options?: OptionsRequest): Observable<any> {
    options = options || {};
    const request = this.getUrlAndParameters(path, options);
    const pipes = this.getPipesDefault(options);
    const observable = this.http.put<T>(request.url, request.options);
    return this.formatObservablePipe(observable, pipes);
  }

  patch<T>(path: string, body = {}, options?: OptionsRequest): Observable<any> {
    options = options || {};
    const request = this.getUrlAndParameters(path, options);
    const pipes = this.getPipesDefault(options);
    const observable = this.http.patch<T>(request.url, request.options);
    return this.formatObservablePipe(observable, pipes);
  }

  private isParameterInPath(endPoint: string, parameterKey: string): boolean {
    return !(endPoint.indexOf(`{${parameterKey}}`) === -1);
  }

  private getUrlAndParameters(url: string, optionsRequest: OptionsRequest): { url: string; options: OptionsRequest } {
    const options: OptionsRequest = new OptionsRequest();
    let paramsQuery = new HttpParams();

    if (optionsRequest.params) {
      Object.keys(optionsRequest.params)
        .forEach((parameterKey: string) => {
          if (this.isParameterInPath(url, parameterKey)) {
            url = url.replace(`{${parameterKey}}`, optionsRequest.params[parameterKey]);
          } else {
            paramsQuery = paramsQuery.append(parameterKey, optionsRequest.params[parameterKey]);
          }
        });
    }

    options.params = paramsQuery;
    options.headers = optionsRequest.headers;
    return {
      url,
      options
    };
  }

  formatObservablePipe(observable: Observable<any>, pipes): Observable<any> {
    return observable.pipe(tap(), tap(), tap(), tap(), tap(), tap(), tap(), tap(), tap(), ...pipes);
  }

  private getPipesDefault(options?): Array<any> {
    const pipes = [];
    pipes.push(catchError((err: any) => this.onCatch(err)));
    return pipes;
  }

  private onCatch(error: any): Observable<any> {
    try {
      if (error.error instanceof ErrorEvent) {
        return throwError(error);
      }
      return this.handleError(error);
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: HttpErrorResponse): any {
    switch (error.status) {
      case 500:
        return throwError(new InternalServerError(error));
      default:
        return throwError(new AppError(error));
    }
  }
}
