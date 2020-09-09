package pe.codesign.rest.microservices.services;

import org.springframework.stereotype.Service;
import pe.codesign.rest.microservices.dto.OperatorResponseDTO;
import pe.codesign.rest.microservices.dto.ProductDTO;
import pe.codesign.rest.microservices.model.Product;
import pe.codesign.rest.microservices.util.MicroServicesException;

import java.util.List;


public interface ProductServices {
    List<ProductDTO> GetAll();
    OperatorResponseDTO Save(ProductDTO product);
    OperatorResponseDTO Update(ProductDTO product);
    ProductDTO GetById(int id) throws MicroServicesException;
    OperatorResponseDTO Delete(int id) throws MicroServicesException;

}
