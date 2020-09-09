package pe.codesign.rest.microservices.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.codesign.rest.microservices.dto.OperatorResponseDTO;
import pe.codesign.rest.microservices.dto.ProductDTO;
import pe.codesign.rest.microservices.model.Product;
import pe.codesign.rest.microservices.services.ProductServices;
import pe.codesign.rest.microservices.util.MicroServicesException;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/v1")
public class ProductController {

    @Autowired
    private ProductServices _productServices;

    @GetMapping("/product")
    public List<ProductDTO> GetAll(){
        return _productServices.GetAll();
    }

    @GetMapping("/product/{id}")
    public ProductDTO GetById(@PathVariable int id) throws MicroServicesException {
        return _productServices.GetById(id);
    }

    @PutMapping("/product")
    public OperatorResponseDTO Update(@RequestBody ProductDTO product){
        return _productServices.Update(product);
    }

    @PostMapping("/product")
    public OperatorResponseDTO Save(@RequestBody ProductDTO product){
        return _productServices.Save(product);
    }

    @DeleteMapping("/product/{id}")
    public OperatorResponseDTO Save(@PathVariable int id) throws MicroServicesException {
        return _productServices.Delete(id);
    }
}
