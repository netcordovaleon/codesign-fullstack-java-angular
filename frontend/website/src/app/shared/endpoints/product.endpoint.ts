import { environment } from 'src/environments/environment';

export class ProductEndpoint {

  public static productList = `${environment.apiURL}${environment.apiVersion}product`;
  public static productSave = `${environment.apiURL}${environment.apiVersion}product`;
  public static productUpdate = `${environment.apiURL}${environment.apiVersion}product`;
  public static productGetById = `${environment.apiURL}${environment.apiVersion}product/{idClient}`;

}
